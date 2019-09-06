import { Injectable } from '@nestjs/common';
import { InjectInMemoryDBService, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Observable, of } from 'rxjs';

import { User } from './interfaces';

@Injectable()
export class UserService {
  constructor(@InjectInMemoryDBService('user') private readonly userService: InMemoryDBService<User>) {}

  findAll(): Observable<User[]> {
    return this.userService.getAllAsync();
  }

  find(id: number): Observable<User> {
    return this.userService.getAsync(id);
  }

  create(user: User): Observable<User> {
    return this.userService.createAsync(user);
  }

  update(user: User): Observable<void> {
    this.userService.updateAsync(user);
    return of();
  }

  delete(id: number): Observable<void> {
    this.userService.deleteAsync(id);
    return of();
  }
}
