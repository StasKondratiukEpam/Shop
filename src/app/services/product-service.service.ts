import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: ProductModel[] = [
    {
      name: 'Cup',
      description: 'Developer`s Cup',
      price: '9.99',
      isAvalible: true,
    },
    {
      name: 'Car',
      description: 'Developer`s car',
      price: '19999.99',
      isAvalible: false,
    },
    {
      name: 'Chair',
      description: 'Developer`s Chair',
      price: '19.99',
      isAvalible: true,
    },
  ];

  getProduct(): ProductModel[] {
    return this.products;
  }
}
