import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { SummarySelectors } from 'src/app/store/summary';
import { SummaryItemModel } from 'src/app/store/summary/actions';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  summary: SummaryItemModel[] = [];
  waitlist: SummaryItemModel[] = [];
  tickets: SummaryItemModel[] = [];
  steps: string[] = ['Tickets', 'Sessions', 'Payment'];

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.store.pipe(select(SummarySelectors.selectSummary)).subscribe((summary) => {
     this.summary = summary || [];
     this.generateTickets();
    });
    this.store.pipe(select(SummarySelectors.selectWaitlist)).subscribe((waitlist) => {
      this.waitlist = waitlist || [];
      this.generateTickets();
    });
  }

  buttonClick(): void {}

  generateTickets(): void {
    this.tickets = [...this.summary, ...this.waitlist];
    this.tickets.sort((a, b) => Number(a.id) - Number(b.id));
  }

  isButtonDisabled = (): boolean => {
    return false;
  }

  getArrayFromNumber(num: number): number[] {
    return new Array(num);
  }

  getTicketIndex(ticketInd: number, quantityInd: number): number {
    let ind = 0;

    for (let i = 0; i < this.tickets.length; i++) {
      const ticket = this.tickets[i];
      if (ticketInd === i) {
        ind += quantityInd;
        ind ++;
        return ind;
      } else {
        ind += ticket.quantity;
      }
    }

    return 0;
  }

}
