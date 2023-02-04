import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { CartaddComponent } from './cartadd/cartadd.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:'', component: CartaddComponent},
  {path:'bookdetail', component:BookdetailsComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'homepage', component:HomepageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
