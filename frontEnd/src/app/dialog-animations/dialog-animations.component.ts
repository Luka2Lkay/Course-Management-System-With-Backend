import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-dialog-animations',
  templateUrl: './dialog-animations.component.html',
  styleUrls: ['./dialog-animations.component.css'],
})
export class DialogAnimationsComponent {
  constructor(public dialogRef: MatDialogRef<CoursesComponent>) {}
}
