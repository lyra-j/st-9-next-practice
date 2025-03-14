export type Intro = {
  description1: string;
  description2: string;
  description3: string;
};

export type News = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: number;
  tags: string[];
};

export type Todo = {
  id?: string;
  title: string;
  contents: string;
  isCompleted: boolean;
  imgPath: string;
  createdAt: number;
};
