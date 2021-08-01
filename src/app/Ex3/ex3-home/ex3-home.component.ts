import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3-home',
  templateUrl: './ex3-home.component.html',
  styleUrls: ['./ex3-home.component.scss'],
})
export class Ex3HomeComponent implements OnInit {
  productList: {
    code: string;
    name: string;
    price: number;
  }[] = [];
  productCode: string = '';
  productName: string = '';
  productPrice: number = 0;

  handleAddProduct() {
    this.productList.push({
      code: this.productCode,
      name: this.productName,
      price: +this.productPrice,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
