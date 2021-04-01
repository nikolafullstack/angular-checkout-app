import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SummaryModule } from './summary';

@NgModule({
  declarations: [],
  imports: [
    SummaryModule,
    StoreModule.forRoot({}),
  ]
})
export class AppStoreModule { }
