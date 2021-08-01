import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-databinding',
  templateUrl: './demo-databinding.component.html',
  styleUrls: ['./demo-databinding.component.scss'],
})
export class DemoDatabindingComponent implements OnInit {
  // Tat ca cac bien la state, An auto detection
  fullName: string = 'Ka Phu Thi Yen';
  age: number = 28;

  imgSrc: string = 'https://picsum.photos/200/300';
  
  setFullName():void {
    this.fullName = this.fullName + " uu";
  }

  // + chuyen ve so
  setAge(e: Event) {
    this.age = +(e.target as HTMLInputElement).value;
  }

  constructor() {}

  ngOnInit(): void {}
}
