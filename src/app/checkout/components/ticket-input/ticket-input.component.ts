import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SummaryItemModel } from '../../../store/summary/actions';
import { ISelectOption } from '../../../shared/components/select/select.component';

@Component({
  selector: 'app-ticket-input',
  templateUrl: './ticket-input.component.html',
  styleUrls: ['./ticket-input.component.scss']
})
export class TicketInputComponent implements OnInit {

  formGroup: FormGroup = this.fb.group({
    firstName: this.fb.control('', Validators.required),
    lastName: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.required),
  });

  ticketOptions: ISelectOption[] = [
    { label: 'United State', value: 'US' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' }
  ];

  open: boolean = true;

  @Input() index: number = 0;
  @Input() ticket: SummaryItemModel;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.ticket.isFree) {
      this.formGroup = this.fb.group({
        firstName: this.fb.control('', Validators.required),
        lastName: this.fb.control('', Validators.required),
        email: this.fb.control('', Validators.required),
      });
    } else {
      this.formGroup = this.fb.group({
        firstName: this.fb.control(''),
        lastName: this.fb.control(''),
        email: this.fb.control(''),
        job_title: this.fb.control(''),
        company: this.fb.control(''),
        country: this.fb.control(''),
      });
    }

    this.formGroup.reset();
  }

  changeBlockState(): void {
    this.open = !this.open;
  }

  hasError = (formControlName, error) => {
    return this.formGroup.get(formControlName) && this.formGroup.get(formControlName).touched && this.formGroup.get(formControlName).hasError(error);
  }

}

