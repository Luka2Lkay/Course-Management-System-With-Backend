import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Course } from '../interfaces/course';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  apiUrl = environment.apiUrl;
  localUrl = (environment as any).localUrl;

  constructor(private _http: HttpClient) {}

  addCourses(data: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Failed to add the course', error);

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

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Failed to fetch the courses', error);

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
    return this._http.patch<Course>(`${this.apiUrl}${id}`, data).pipe(
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
