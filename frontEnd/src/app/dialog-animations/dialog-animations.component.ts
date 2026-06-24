import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';
import { Course } from '../interfaces/course';

@Component({
  selector: 'app-dialog-animations',
  templateUrl: './dialog-animations.component.html',
  styleUrls: ['./dialog-animations.component.css'],
})
export class DialogAnimationsComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogAnimationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private _courseService: CoursesService,
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

  removeCourse(): void {
    this._courseService.deleteCourse(this.data.id).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Failed to delete course: ', error.message);
      },
    });
  }
}
