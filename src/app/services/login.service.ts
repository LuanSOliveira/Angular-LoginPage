import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLogin: string = ''
  userAcesse: boolean = false

  constructor() { }
}
