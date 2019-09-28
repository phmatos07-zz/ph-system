import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  private subjectData = new Subject;

  send<T>(data: T): void {
    this.subjectData.next(data);
  }

  getData(): Observable<any> {
    return this.subjectData.asObservable();
  }
}
