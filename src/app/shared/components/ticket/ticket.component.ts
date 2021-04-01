import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { AppState } from '../../store/app.state';
import { SummaryActions, SummarySelectors } from '../../store/summary';
import { SummaryItemModel } from '../../store/summary/actions';
import { ISelectOption } from '../select/select.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() endDate: number;
  @Input() price: number;
  @Input() donation: boolean = false;
  @Input() productImage: string = '';
  @Input() stock: number = -1;

  selectedPrice: number = 200;
  customPrice = new FormControl('');
  summary: SummaryItemModel = null;
  waitlist: SummaryItemModel = null;

  ticketOptions: ISelectOption[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.customPrice.valueChanges.subscribe(value => {
      if(value) {
        this.selectedPrice = null;
      }
    });
    this.store.pipe(select(SummarySelectors.selectSummaryById, { id: this.id })).subscribe((summary) => {
      this.summary = summary || null;
    });
    this.store.pipe(select(SummarySelectors.selectWaitlistById, { id: this.id })).subscribe((waitlist) => {
      this.waitlist = waitlist || null;
    });

    this.generateTicketOptions();
  }

  generateTicketOptions() {
    const count = this.stock === -1 ? 5 : this.stock;
    this.ticketOptions = [];

    for (let i = 0; i <= count; i++) {
      this.ticketOptions.push({
        label: i.toString(),
        value: i.toString()
      });
    }
  }

  selectPrice(price: number): void {
    this.selectedPrice = price;
    this.customPrice.setValue('');
  }

  selectQuantity(event): void {
    if(this.id) {
      this.store.dispatch(new SummaryActions.AddItemAction({
        id: this.id,
        title: this.title,
        quantity: +event.value,
        price: this.price === -1 ? 0 : this.price,
        isFree: this.price === -1,
      }));
    }
  }

  addTicketToWaitList(): void {
    this.store.dispatch(new SummaryActions.AddWaitlistItemAction({
      id: this.id,
      title: this.title,
      quantity: 2,
      price: this.price === -1 ? 0 : this.price,
      isFree: this.price === -1,
    }));
  }

  removeTicketFromWaitList(): void {
    this.store.dispatch(new SummaryActions.RemoveWaitlistItemAction(this.id));
  }

  get getSalesDate(): string {
    return moment(1617223268796).to(this.endDate);
  }

  get isSalesEndSoon(): boolean {
    return moment(1617223268796).diff(new Date(this.endDate), 'days') === 0;
  }

  get getPrice(): string {
    if(this.price === -1) return 'Free';
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 10 }).format(this.price);
  }

  get getIsWaitList(): boolean {
    return !!this.waitlist;
  }

  get getSummaryQuantity(): number {
    return this.summary ? this.summary.quantity : 0;
  }
}
