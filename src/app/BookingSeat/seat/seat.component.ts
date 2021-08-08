import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ISeat } from '../../models/seat';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss'],
})
export class SeatComponent implements OnInit {
  @Input() seat!: ISeat;

  @Output() selectSeat = new EventEmitter();

  isBooking: boolean = false;
  handleSelectSeat() {
    this.selectSeat.emit(this.seat);

    this.isBooking = !this.isBooking
  }

  constructor() {}

  ngOnInit(): void {}
}
