import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  mydata: MyDataType[] = [
    { id: 1, name: 'Aleja' },
    { id: 2, name: 'Giraldo' },
  ];

  constructor() {}

  getUsersForSubscription(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>((observer) => {
      observer.next(this.mydata);
    });
    return data;
  }

  getEmployeeSalary(): Observable<any> {
    let salary = new Observable<any>((observer) => {
      observer.next('Working');
    });
    return salary;
  }
}

export class MyDataType {
  public id: number;
  public name: string;
}
