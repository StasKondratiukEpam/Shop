import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  products!: ProductModel[];

  constructor(private prodService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.prodService.getProduct();
  }

}
