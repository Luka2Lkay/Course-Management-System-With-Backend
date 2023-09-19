import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
})
export class AddCourseComponent implements OnInit {
  imageData?: string;

  cmsForm: FormGroup = this._fb.group({
    course: '',
    modules: '',
    duration: '',
    description: '',
    availability: '',
    imageUrl: '',
  });

  completionTimes: string[] = ['3 Months', '6 Months', '12 Months'];
  availabity: string[] = ['Yes', 'No'];

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddCourseComponent>,
    private _coursesService: CoursesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.cmsForm.patchValue(this.data);
  }

  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  selectedFile?: any;

  getSelectedFile(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  isImageSelected(): void {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!this.selectedFile) {
      alert('Upload an image!');
    } else if (
      this.selectedFile &&
      !allowedTypes.includes(this.selectedFile.type)
    ) {
      alert('Upload images only');
    }
  }

  save() {
    if (this.cmsForm.valid) {
      if (this.data) {
        this._coursesService
          .updateCourse(this.data._id, this.cmsForm.value)
          .subscribe({
            next: () => {
              this.reloadCurrentRoute();
              this._dialogRef.close(true);
            },
            error: console.log,
          });
      } else {
        let formData = new FormData();
        formData.append('course', this.cmsForm.value.course);
        formData.append('description', this.cmsForm.value.description);
        formData.append('modules', this.cmsForm.value.modules);
        formData.append('duration', this.cmsForm.value.duration);
        formData.append('availability', this.cmsForm.value.availability);
        formData.append('file', this.selectedFile);

        this.isImageSelected();

        this._coursesService.addCourses(formData).subscribe({
          next: () => {
            this.reloadCurrentRoute();
            this._dialogRef.close(true);
          },
          error: console.log,
        });
      }
    }
  }
}
