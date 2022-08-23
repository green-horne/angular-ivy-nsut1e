import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, delay } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private readonly httpClient: HttpClient) {}

  getUserName(): Observable<string> {
    return this.httpClient.get<any>('https://randomuser.me/api').pipe(
      delay(5000),    // NG Container wird erst angezeigt, wenn Werte vorhanden sind - hier nach 5 Sekunden
      tap((data) => console.log(data)),     // Array.forEach()
      map((data) => data.results[0].email)  
    );
  }
}
