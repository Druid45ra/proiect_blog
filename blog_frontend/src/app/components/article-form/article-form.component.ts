import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  article: Article = new Article(); // Initialize article
  id: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe(
        (data: Article) => {
          this.article = data;
        },
        (error) => {
          console.error('Error fetching article:', error);
        }
      );
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.id) {
        this.articleService.updateArticle(this.article).subscribe(
          () => {
            this.router.navigate(['/articles', this.id]);
          },
          (error) => {
            console.error('Error updating article:', error);
          }
        );
      } else {
        this.articleService.createArticle(this.article).subscribe(
          (data) => {
            this.router.navigate(['/articles', data.id]);
          },
          (error) => {
            console.error('Error creating article:', error);
          }
        );
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/articles']);
  }
}
