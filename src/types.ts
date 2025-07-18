import { ReactNode } from "react";

export interface Social {
  image: ReactNode;
  link: string;
}

export interface Project {
  title: string;
  description: string;
  content: string;
  slug: string;
  hidden: boolean;
  date: {
    published: string;
    modified: string;
  };
  tags?: string[];
  icon?: string;
  favor: number;
}

export interface Post {
  title: string;
  description: string;
  content: string;
  slug: string;
  date: {
    published: string;
    modified?: string;
  };
  hidden?: boolean;
  tags?: string[];
}
