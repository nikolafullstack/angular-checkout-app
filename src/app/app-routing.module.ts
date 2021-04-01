import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: '', component: TicketsComponent, canActivate: [] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
