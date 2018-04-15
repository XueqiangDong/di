import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor() {
  }

  getProduct(): Product {

    return new Product(0, '扫地机', 299.99, '现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库。');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string,
  ) {
  }

}
