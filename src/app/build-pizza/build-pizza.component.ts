import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {BuildService} from "../build.service";

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {

  ingredients:any;
  totalCost:number = 0;
  constructor(private buildService: BuildService) { }
  ngOnInit() {
    this.getPizzas();
  }
  getPizzas(){
    this.buildService.getIngredients().subscribe((responseData)=>{
        this.ingredients = responseData;
        console.log(responseData);
      },
      (error)=>{
        console.log('Something went wrong'+error.status);
      });
  }
  addIngredient(price:number,status:boolean){
    console.log(price);
    if(status){
      this.totalCost=this.totalCost + price;
    }else{
      this.totalCost=this.totalCost - price;
    }
  }
  build(){
    alert('You order has been placed.. You will be redirected to the payment page');
  }
}
