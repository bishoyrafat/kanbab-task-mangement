import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
boardName$ = new Subject<string>()
changeBoardName$ = new Subject<string>()
sideBar$ = new BehaviorSubject<any>([])
  constructor() { }
}
