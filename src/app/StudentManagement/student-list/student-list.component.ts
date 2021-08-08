import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: {name: string; age: number}[] = [
    {
      name:"Yen", age: 25,
    },
    {
      name:"Yen 2", age: 26,
    },
    {
      name:"Yen 3", age: 27,
    }
  ];

  hightQuanlityStudents: {name: string; age: number}[] = [];

  // Biến hứng ở cha từ thằng con truyền ra kg cần @Imput
  selectedStudent!: { name: string; age: number; };
  
  setSelectedStudent(val: {name: string; age: number}) {
    this.selectedStudent = val;
  }


  setselectHightQualityStudent(val: {name: string; age: number}) {
    this.hightQuanlityStudents.push(val);    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
