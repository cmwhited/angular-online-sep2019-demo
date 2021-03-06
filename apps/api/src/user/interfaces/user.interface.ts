import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface User extends InMemoryDBEntity {
  email: string;
  name: string;
  role: 'USER' | 'ADMIN';
  age: number;
}
