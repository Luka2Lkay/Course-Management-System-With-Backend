import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseEventService {
  constructor() {}

  private courseRefreshSource = new Subject<void>();
  courseRefresh$ = this.courseRefreshSource.asObservable();

  triggerRefresh() {
    this.courseRefreshSource.next();
  }
}
