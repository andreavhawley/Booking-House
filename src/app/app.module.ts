import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductComponent } from './Components/product/product.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
