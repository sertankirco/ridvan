export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
}

export interface AIResponse {
  title: string;
  content: string;
  summary: string;
  tags: string[];
}
