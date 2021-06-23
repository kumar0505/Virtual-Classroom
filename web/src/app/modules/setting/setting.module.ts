import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { AddDeptComponent } from './add-dept/add-dept.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseComponent } from './course/course.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [SettingComponent, AddDeptComponent, AddFacultyComponent, AddStudentComponent, AddCourseComponent, CourseComponent],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatStepperModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
  ]
})
export class SettingModule { }
