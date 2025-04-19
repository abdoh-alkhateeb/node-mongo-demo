import { Audiobook } from '@/types/audiobook';

interface Props {
  params: { id: string };
}

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/+$/, '');

async function fetchAudiobook(id: string): Promise<Audiobook | null> {
  const res = await fetch(`${BACKEND_URL}/api/audiobooks/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function AudiobookPage({ params }: Props) {
  const book = await fetchAudiobook((await params).id);

  if (!book) return <p className="p-8">Audiobook not found.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {book.coverUrl && (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full max-w-xs object-cover rounded-lg shadow"
          />
        )}

        <div className="flex-1 space-y-2">
          <h1 className="text-3xl font-bold">{book.title}</h1>

          <p className="text-lg text-gray-700">By {book.author}</p>

          {book.narrator && (
            <p className="text-sm text-gray-500">Narrated by {book.narrator}</p>
          )}

          <p className="mt-4 text-gray-600">{book.description}</p>

          {book.genre && (
            <span className="inline-block mt-2 bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">
              {book.genre}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Chapters</h2>
        {book.chapters.map((chapter, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-lg">{chapter.title}</h3>

              {chapter.duration && (
                <span className="text-sm text-gray-500">
                  {(chapter.duration / 60).toFixed(1)} min
                </span>
              )}
            </div>

            <audio controls className="w-full mt-2">
              <source src={chapter.audioUrl} type="audio/mpeg" />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}
