import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Message {
  message: string;
}

export interface User extends InMemoryDBEntity {
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
  age: number;
}

export interface Comment extends InMemoryDBEntity {
  userId: number;
  comment: string;
}
