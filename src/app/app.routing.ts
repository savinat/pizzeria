import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OrderPizzaComponent} from "./order-pizza/order-pizza.component";
import {BuildPizzaComponent} from "./build-pizza/build-pizza.component";


const APP_ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'order', component: OrderPizzaComponent},
  {path:'build', component: BuildPizzaComponent},

];

export const routingModule = RouterModule.forRoot(APP_ROUTES);
