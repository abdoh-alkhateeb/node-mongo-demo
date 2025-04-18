import { Audiobook } from '@/types/audiobook';
import Link from 'next/link';

async function fetchAudiobooks(): Promise<Audiobook[]> {
  const res = await fetch('http://localhost:5000/api/audiobooks', {
    cache: 'no-store',
  });

  return res.json();
}

export default async function Home() {
  const books = await fetchAudiobooks();

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">EchoReads</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link key={book._id} href={`/audiobook/${book._id}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition hover:shadow-lg hover:scale-[1.02]">
              {book.coverUrl && (
                <img
                  src={book.coverUrl}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{book.title}</h2>

                <p className="text-sm text-gray-600">By {book.author}</p>
                {book.narrator && (
                  <p className="text-xs text-gray-400">
                    Narrated by {book.narrator}
                  </p>
                )}

                <p className="text-sm text-gray-500 line-clamp-2">
                  {book.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
