import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BackButtonComponent } from './back-button/back-button.component';
import { StepperComponent } from './stepper/stepper.component';
import { SelectComponent } from './select/select.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketInputComponent } from './ticket-input/ticket-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    TicketComponent,
    TicketInputComponent,
  ],
  exports: [
    BackButtonComponent,
    StepperComponent,
    SelectComponent,
    TicketComponent,
    TicketInputComponent,
  ],
})
export class ComponentsModule { }
