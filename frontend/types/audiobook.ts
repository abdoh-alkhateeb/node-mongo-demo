export interface Chapter {
  title: string;
  audioUrl: string;
  duration?: number;
}

export interface Audiobook {
  _id: string;
  title: string;
  author: string;
  narrator?: string;
  coverUrl?: string;
  description?: string;
  genre?: string;
  releaseDate?: string;
  chapters: Chapter[];
}
