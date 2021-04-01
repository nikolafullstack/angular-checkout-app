import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button/back-button.component';
import { StepperComponent } from './stepper/stepper.component';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    BackButtonComponent,
    StepperComponent,
    SelectComponent,
    OrderSummaryComponent,
  ],
  exports: [
    BackButtonComponent,
    StepperComponent,
    SelectComponent,
    OrderSummaryComponent,
  ],
})
export class ComponentsModule { }
