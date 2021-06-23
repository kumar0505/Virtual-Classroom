import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'code'];
  dataSource = [
    { id: 1, name: 'Database Design', code: 'CSE001', },
    { id: 2, name: 'System Design', code: 'CSE002' },
    { id: 3, name: 'Image Processing', code: 'CSE003' },
    { id: 4, name: 'C++ Programing', code: 'CSE004' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
