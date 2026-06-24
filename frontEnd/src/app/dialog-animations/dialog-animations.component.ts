import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';

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
