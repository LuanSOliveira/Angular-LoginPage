import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../IUser';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private apiUrl = "https://643700b13e4d2b4a12e1541c.mockapi.io/user"

  constructor(private http: HttpClient) { }

  getAll(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.apiUrl)
  }
}
