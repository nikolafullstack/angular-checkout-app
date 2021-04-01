import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./tickets/tickets.module').then(
      module => module.TicketsModule
    )
  },
  {
    path: 'checkout', 
    loadChildren: () => import('./checkout/checkout.module').then(
      module => module.CheckoutModule
    )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
