import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { OrderPizzaComponent } from './order-pizza/order-pizza.component';
import { BuildPizzaComponent } from './build-pizza/build-pizza.component';
import { HomeComponent } from './home/home.component';
import {routingModule} from "./app.routing";
import {OrderService} from "./order.service";
import {BuildService} from "./build.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    OrderPizzaComponent,
    BuildPizzaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [OrderService, BuildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
