import { Injectable } from '@nestjs/common';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Observable, of } from 'rxjs';

import { Comment } from '@angular-online-sep2019-demo/api-interfaces';

@Injectable()
export class CommentService {
  constructor(@InjectInMemoryDBService('comment') private readonly commentService: InMemoryDBService<Comment>) {}

  findAllByUser(userId: number): Observable<Comment[]> {
    return this.commentService.queryAsync(comment => comment.userId === userId);
  }

  find(id: number): Observable<Comment> {
    return this.commentService.getAsync(id);
  }

  create(comment: Comment): Observable<Comment> {
    return this.commentService.createAsync(comment);
  }

  delete(id: number): Observable<void> {
    this.commentService.deleteAsync(id);
    return of();
  }
}
