import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../shared/store/app.state';
import { SummaryActions, SummarySelectors } from '../shared/store/summary';
import { SummaryItemModel } from '../shared/store/summary/actions';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  summary: SummaryItemModel[] = [];
  waitlist: SummaryItemModel[] = [];
  tax: number = 289.42;
  promocodeInpute: boolean = false;
  @Input() buttonDisabled: boolean = false;
  @Input() buttonText: string = 'Checkout';
  @Input() editable: boolean = false;
  @Output() buttonClick = new EventEmitter<any>();

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(SummarySelectors.selectSummary)).subscribe((summary) => {
      this.summary = summary || [];
    });
    this.store.pipe(select(SummarySelectors.selectWaitlist)).subscribe((waitlist) => {
      this.waitlist = waitlist || [];
    });
  }

  onClickPromocode(): void {
    this.promocodeInpute = !this.promocodeInpute;
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

  convertSummaryPrice(summary: SummaryItemModel): any {
    return this.currencyFormat(summary.price * summary.quantity);
  }

  currencyFormat(num: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 10 }).format(num);
  }

  get getSubTotal(): string {
    let price = 0;
    for(let i = 0; i < this.summary.length; i++) {
      price += this.summary[i].price * this.summary[i].quantity;
    }
    for (let j = 0; j < this.waitlist.length; j++) {
      price += this.waitlist[j].price * this.waitlist[j].quantity;
    }
    return this.currencyFormat(price);
  }

  get total(): string {
    let price = 0;
    for(let i = 0; i < this.summary.length; i++) {
      price += this.summary[i].price * this.summary[i].quantity;
    }
    for (let j = 0; j < this.waitlist.length; j++) {
      price += this.waitlist[j].price * this.waitlist[j].quantity;
    }
    price += this.tax;
    return this.currencyFormat(price);
  }
}
