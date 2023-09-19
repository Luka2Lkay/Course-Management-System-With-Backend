import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  apiUrl = 'http://localhost:3300/course';

  constructor(private _http: HttpClient) {}

  addCourses(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/create`, data);
  }

  getAllCourses(): Observable<any> {
    return this._http.get(this.apiUrl);
  }

  deleteCourse(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3300/course/${id}`);
  }

  updateCourse(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3300/course/${id}`, data);
  }

  getCourse(id: number): Observable<any> {
    return this._http.get(`'http://localhost:3300/course/'${id}`);
  }
}
