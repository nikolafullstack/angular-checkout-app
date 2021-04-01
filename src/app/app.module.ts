import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from './shared/store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    OrderSummaryComponent,
    TicketsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AppStoreModule,
  ],
  exports: [OrderSummaryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
