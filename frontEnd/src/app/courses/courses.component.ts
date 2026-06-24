import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
import { Course } from '../interfaces/course';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnimationsComponent } from '../dialog-animations/dialog-animations.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private _courseService: CoursesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  courses?: Course[];

  ngOnInit(): void {
    this.getAllCourses();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  openDialog(): void {
    this.dialog.open(DialogAnimationsComponent, {
      width: '250px',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '20ms',
    });
  }

  getAllCourses(): void {
    this._courseService.getAllCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
    });
  }

  removeCourse(id: string): void {
  
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
