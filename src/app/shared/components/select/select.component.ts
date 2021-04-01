import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface ISelectOption {
  value: string,
  label: string,
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnChanges {

  @Input() height: string = '32px';
  @Input() width: string = '60px';
  @Input() selectedValue: number = null;
  @Input() options: ISelectOption[] = [];
  @Output() select = new EventEmitter<any>();

  value: ISelectOption;
  placeholder: string = 'Select';
  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.selectedValue === null) {
      this.value = this.options[0];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedValue && changes.selectedValue.currentValue !== null) {
      this.setValue(this.selectedValue.toString());
    }
  }

  changeSelectState(): void {
    this.open = !this.open;
  }

  setValue(v: string): void {
    const s = this.options.find(o => o.value === v);
    if (s) {
      this.value = s;
    }
  }

  selectValue(value: ISelectOption): void {
    this.value = value;
    this.open = false;
    this.select.emit(value);
  }

  get getSelectWrapperStyle(): string {
    return `height:${this.height};width:${this.width}`;
  }

}
