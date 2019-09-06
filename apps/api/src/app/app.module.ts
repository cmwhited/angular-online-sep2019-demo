import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { join } from 'path';

import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    InMemoryDBModule.forRoot({}),
    GraphQLModule.forRoot({
      typePaths: ['./apps/api/src/**/*.graphql'],
      debug: true,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'libs/api-interfaces/src/lib/app-schema.graphql.ts'),
      },
      installSubscriptionHandlers: true,
    }),
    UserModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
