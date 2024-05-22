import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root',
})

export class CoursesService {
  apiUrl = 'https://course-management-system-with-backend-qvqd.vercel.app/';

  constructor(private _http: HttpClient) {}

  addCourses(data: FormData): Observable<Course> {
    return this._http.post<Course>(`${this.apiUrl}/course/create`, data);
  }

  getAllCourses(): Observable<Course[]> {
    return this._http.get<Course[]>(`${this.apiUrl}/course`);
  }

  deleteCourse(id: number): Observable<Course> {
    return this._http.delete<Course>(`${this.apiUrl}/${id}`);
  }

  updateCourse(id: number, data: FormData): Observable<Course> {
    return this._http.put<Course>(`${this.apiUrl}/${id}`, data);
  }

  getCourse(id: number): Observable<Course> {
    return this._http.get<Course>(`${this.apiUrl}/'${id}`);
  }
}
