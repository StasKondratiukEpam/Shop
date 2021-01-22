import { Injectable } from '@angular/core';
import { CartModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  boughtProducts: CartModel[] = [
    {
      name: 'Cup',
      description: 'Developer`s Cup',
      price: '9.99',
      numberOfItems: 10,
    },
    {
      name: 'Car',
      description: 'Developer`s car',
      price: '19999.99',
      numberOfItems: 1,
    },
    {
      name: 'Chair',
      description: 'Developer`s Chair',
      price: '19.99',
      numberOfItems: 2,
    },
  ];

  getCartProducts(): CartModel[] {
    return this.boughtProducts;
  }
}
