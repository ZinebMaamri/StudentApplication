import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListAgeComponent } from './student-list-age/student-list-age.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path:'create-student', component: CreateStudentComponent},
  {path:'', redirectTo:'students', pathMatch: 'full'},
  {path:'update-student/:id', component: UpdateStudentComponent},
  {path:'student-details/:id', component: StudentDetailsComponent},
  {path:'student-list-age', component: StudentListAgeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
