export class Comment {
  id?: number;
  author: string;
  articleId: number;
  content: string;
  created_at: Date;

  constructor(
    author: string,
    articleId: number,
    content: string,
    created_at: Date,
    id?: number
  ) {
    this.id = id;
    this.author = author;
    this.articleId = articleId;
    this.content = content;
    this.created_at = created_at;
  }
}
