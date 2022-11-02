import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BuildService {

  constructor(private http: HttpClient) { }
  getIngredients(){
    return this.http.get('http://localhost:3000/ingredients');
  }

}
