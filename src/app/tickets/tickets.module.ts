import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';
import { SharedModule } from '../shared/shared.module';
import { TicketComponent } from './components/ticket/ticket.component';

const routes: Routes = [
  { path: '', component: TicketsComponent }
];

@NgModule({
  declarations: [
    TicketsComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class TicketsModule { }
