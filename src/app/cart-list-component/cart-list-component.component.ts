import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { CartModel } from '../models/cart.model';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.scss']
})
export class CartListComponentComponent implements OnInit{
  cartProducts!: CartModel[];

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCartProducts();
  }

  trackByItemCount(numberOfItems: number, item: CartModel): number {
    return item.numberOfItems;
  }
}
