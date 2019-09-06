import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { PubSub } from 'graphql-subscriptions';

import { CommentModule } from '../comment/comment.module';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [InMemoryDBModule.forFeature('user', {}), CommentModule],
  providers: [
    UserService,
    UserResolver,
    {
      provide: 'PUB_SUB',
      useValue: new PubSub(),
    },
  ],
})
export class UserModule {}
