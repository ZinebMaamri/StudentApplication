import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list-age',
  templateUrl: './student-list-age.component.html',
  styleUrls: ['./student-list-age.component.css']
})
export class StudentListAgeComponent implements OnInit {

  students: Student[] | undefined;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentsAge();
  }

  getStudentsAge(){
    this.studentService.getListStudentsAge().subscribe(data => {
      this.students = data;
      });
  }

}
