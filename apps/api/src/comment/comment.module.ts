import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';

@Module({
  imports: [InMemoryDBModule.forFeature('comment', {})],
  providers: [CommentService, CommentResolver],
  exports: [CommentService],
})
export class CommentModule {}
