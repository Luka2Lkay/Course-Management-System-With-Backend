import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  apiUrl = 'https://course-management-system-with-backe.vercel.app';

  constructor(private _http: HttpClient) {}

  addCourses(data: any): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/course/create`, data);
  }

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(`${this.apiUrl}/course`);
  }

  deleteCourse(id: string): Observable<Course> {
    return this._http.delete<Course>(`${this.apiUrl}/${id}`);
  }

  updateCourse(id: string, data: FormData): Observable<Course> {
    return this._http
      .patch<Course>(`${this.apiUrl}/course/${id}`, data)
      .pipe(
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

  // getCourse(id: number): Observable<Course> {
  //   return this._http.get<Course>(`${this.apiUrl}/'${id}`);
  // }
}
