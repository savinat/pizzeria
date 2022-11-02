import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }
  getPizzas(){
    return this.http.get('http://localhost:3000/pizzas');
  }
}
