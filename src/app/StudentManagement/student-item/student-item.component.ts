import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss']
})
export class StudentItemComponent implements OnInit {
  // Tạo biến hứng dữ liệu từ cha
  // Tạo biến hứng dữ liệu từ cha
  @Input() student!: { name: string; age: number};

  // EventEmitter: đẩy sự kiện ra thằng cha
  @Output() selectStudent = new EventEmitter();
  @Output() selectHightSQualitytudent = new EventEmitter();
  
  handleSelect() {
    // emit: bóp còi đẩy dữ liệu sang cha
    this.selectStudent.emit(this.student);    
  }

  handleSelectHightQuanlityStudent() {
    this.selectHightSQualitytudent.emit(this.student);    
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
