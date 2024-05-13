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
    private dialogue: MatDialog,
    private router: Router
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

  removeCourse(id: number): void {
    alert('Are you sure you want to delete this course?');
    this._courseService.deleteCourse(id).subscribe({
      next: () => {
    
        this.getAllCourses();
      },
      error: console.log,
    });
  }

  onSelect(id: number): void {
    const shortenedId = id.toString().slice(5,10)
    this.router.navigate(["/detail", shortenedId])
  }
}