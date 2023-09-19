import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { Location } from '@angular/common';
import { AddCourseComponent } from '../add-course/add-course.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  @Input() selectedCourse?: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private _coursesService: CoursesService,
    private dialogue: MatDialog
  ) {}

  courses?: any;

  ngOnInit(): void {
    this.getAllCourses();
    this.getTask();
  }

  getTask() {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this._coursesService.getAllCourses().subscribe({
      next: (res) => {
        const course = res.find((el: any) =>
          el._id.toString().slice(5,10).includes(courseId)
        );

        this.selectedCourse = course;
      },
      error: console.log,
    });
  }

  getAllCourses(): void {
    this._coursesService.getAllCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
    });
  }

  viewEditForm(data: any) {
    const dialogRef = this.dialogue.open(AddCourseComponent, { data });

    dialogRef.afterClosed().subscribe({
      next: () => {
        this.getAllCourses();
      },
      error: console.log,
    });
  }

  goBack(): void {
    this.location.back();
  }
}
