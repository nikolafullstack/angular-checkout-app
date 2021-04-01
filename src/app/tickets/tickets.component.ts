import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  selectedPrice: number = 200;
  customPrice = new FormControl('');

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.customPrice.valueChanges.subscribe(value => {
      if(value) {
        this.selectedPrice = null;
      }
    });
  }
  
  selectPrice(price: number): void {
    this.selectedPrice = price;
    this.customPrice.setValue('');
  }

  goToCheckout(): void {
    this.router.navigate(['checkout']);
  }
}
