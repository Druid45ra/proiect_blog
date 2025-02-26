export class Article {
  id?: number;
  title: string;
  content: string;
  author: string;
  publishedDate: Date;

  constructor(
    title: string,
    content: string,
    author: string,
    publishedDate: Date,
    id?: number
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.publishedDate = publishedDate;
  }
}
