import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Comment extends InMemoryDBEntity {
  userId: number;
  comment: string;
}
