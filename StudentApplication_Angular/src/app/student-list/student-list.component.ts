import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import {StudentService} from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] | undefined;

  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(): void {
 /* this.students=[{
      "id":1,
      "firstName":"zineb",
      "lastName":"maamri",
      "emailId":"zinebmaamri73@gmail.com"
      "age": 23

    }];*/
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentsList().subscribe(data => {
    this.students = data;
    });
  }
  
  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  studentDetails(id: number){
    this.router.navigate(['student-details', id]);
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id).subscribe( data => {
      console.log(data);
      this.getStudents();
    })
  }


}
