import { Component, OnInit } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../app/interfaces/course';
import { CoursesService } from '../app/services/courses.service';
import { CourseEventService } from './services/course-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'course-management-system';
  constructor(
    private _dialog: MatDialog,
    private _courseService: CoursesService,
    private _courseEventService: CourseEventService
  ) {}

  courses?: Course[];
  isLoading: boolean = false;

  openForm() {
    const dialogRef = this._dialog.open(AddCourseComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((isCreated) => {
      console.log("is it created:, ", isCreated)
      if (isCreated) {
        this._courseEventService.triggerRefresh();
      }
    });
  }

}
