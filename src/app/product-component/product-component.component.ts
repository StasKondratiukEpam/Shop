import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  @Input()
  product!: ProductModel;

  onBuy(): void {
    console.log(`${this.product.name} Was Bought! For ${this.product.price}`);
  }
}
