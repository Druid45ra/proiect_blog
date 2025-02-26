import { Component, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment!: Comment;

  constructor(private commentService: CommentService) {}

  editComment(comment: Comment): void {
    // Implementați logica pentru editarea comentariului
    console.log('Edit comment:', comment);
  }

  deleteComment(commentId: number): void {
    this.commentService.deleteComment(commentId).subscribe(() => {
      console.log('Comment deleted:', commentId);
      // Implementați logica pentru actualizarea listei de comentarii după ștergere
    });
  }
}
