import {Injectable} from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {
  constructor(protected logger: LoggerService) {
  }

  getProduct(): Product {
    this.logger.logger('LoggerService被调用');
    return new Product(1, '吸尘器', 599.99, 'anotherProductService，又想在GitHub创建一个Git仓库。')
      ;
  }

}

