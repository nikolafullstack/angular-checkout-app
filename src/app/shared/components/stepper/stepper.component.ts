import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() activeStep: number = 1;
  @Input() steps: string[] = [];

  constructor() { }

  ngOnInit(): void {}

}
