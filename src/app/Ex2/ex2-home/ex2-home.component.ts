import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2-home',
  templateUrl: './ex2-home.component.html',
  styleUrls: ['./ex2-home.component.scss'],
})
export class Ex2HomeComponent implements OnInit {
  userName: string = '';
  passWord: string = '';
  isLogin: boolean = false;

  handleLogin() {
    if (this.userName === 'yen' && this.passWord === '123456') {
      this.isLogin = true;
    } else {
      alert("Nhập sai Username hoặc Password")
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
