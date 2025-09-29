export interface PostMatter {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  desc: string;
  isHot?: boolean;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}
