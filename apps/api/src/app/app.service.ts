import { Injectable } from '@nestjs/common';
import { Message } from '@angular-online-sep2019-demo/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
