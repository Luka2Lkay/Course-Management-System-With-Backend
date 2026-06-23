import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Course } from '../interfaces/course';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  apiUrl = environment.apiUrl;
  localUrl = environment.localUrl;

  constructor(private _http: HttpClient) {}

  addCourses(data: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, data);
  }

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.apiUrl);
  }

  deleteCourse(id: string): Observable<Course> {
    return this._http.delete<Course>(`${this.apiUrl}${id}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Failed to delete the course', error);

        let errorMessage = 'Something went wrong';

        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.status === 0) {
          errorMessage = 'Unable to connect to the server';
        }

        return throwError(() => new Error(errorMessage));
      }),
    );
  }

  updateCourse(id: string, data: FormData): Observable<Course> {
    return this._http.patch<Course>(`${this.localUrl}${id}`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Update course failed: ', error);

        let errorMessage = 'Something went wrong!';

        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.status === 0) {
          errorMessage = 'Unable to connect to the server';
        }

        return throwError(() => new Error(errorMessage));
      }),
    );
  }
}
