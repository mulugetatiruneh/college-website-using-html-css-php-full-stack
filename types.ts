
export interface Department {
  id: string;
  name: string;
  description: string;
  icon: string;
  courses: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
