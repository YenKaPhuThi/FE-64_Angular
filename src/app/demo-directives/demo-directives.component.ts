import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrls: ['./demo-directives.component.scss'],
})
export class DemoDirectivesComponent implements OnInit {
  isFine: boolean = true;
  month: number = 1;

  isBooking:boolean = false;
  bgColor: string = "#ff0000";
  
  monthOptions: { label: string; value: number }[] = [
    {
      label: 'Tháng 1',
      value: 1
    },
    {
      label: 'Tháng 2',
      value: 2
    },
    {
      label: 'Tháng 3',
      value: 3
    },
    {
      label: 'Tháng 4',
      value: 4
    }
  ];

  handleMakeDecision(val: boolean) {
    this.isFine = val;
  }

  handleChangeMonth() {
    console.log('hi');
  }

  handleSelect() {
    this.isBooking = !this.isBooking;
  }

  constructor() {}

  ngOnInit(): void {}
}
