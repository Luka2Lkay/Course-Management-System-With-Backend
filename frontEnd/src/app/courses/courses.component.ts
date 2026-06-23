import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private _courseService: CoursesService,
    private router: Router,
  ) {}

  courses?: Course[];

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this._courseService.getAllCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
    });
  }

  removeCourse(id: string): void {
    alert('Are you sure you want to delete this course?');
    this._courseService.deleteCourse(id).subscribe({
      next: () => {
        this.getAllCourses();
      },
      error: (error) => {
        console.error('Failed to delete course: ', error.message);
      },
    });
  }

  onSelect(id: string): void {
    const shortenedId = id.toString().slice(5, 10);
    this.router.navigate(['/detail', shortenedId]);
  }
}
