import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartListComponentComponent } from './cart-list-component/cart-list-component.component';
// import { ProductServiceService } from './services/product-service.service';
// import { CartServiceService } from './services/cart-service.service';

@NgModule({
  declarations: [
    AppComponent,
    // Два суффикса "Component" - это много, надо поправить названия классов компонентов
    FirstComponentComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartListComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Это делать не надо
  // providers: [ ProductServiceService, CartServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
