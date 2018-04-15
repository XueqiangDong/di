import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {
  }

  logger(message: string) {
    console.log(message);
  }

}
