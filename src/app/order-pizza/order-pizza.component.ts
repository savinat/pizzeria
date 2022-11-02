import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order-pizza',
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {
  pizzas:any;
  constructor(private orderService: OrderService) { }
  ngOnInit() {
    this.getPizzas();
  }
  getPizzas(){
    this.orderService.getPizzas().subscribe((responseData)=>{
        this.pizzas = responseData;
        console.log(responseData);
      },
      (error)=>{
        console.log('Something went wrong'+error.status);
      });
  }

}
