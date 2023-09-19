import { Component } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog'
import { CoursesService } from './services/courses.service';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-management-system';
  constructor(private _dialog: MatDialog, private _courseService: CoursesService){

  }

  openForm(){
    this._dialog.open(AddCourseComponent)
  }
}
