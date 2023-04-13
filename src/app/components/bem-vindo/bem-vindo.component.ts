import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent {
  urlLogo:string = "https://img.icons8.com/bubbles/100/null/approval.png"

  constructor(private router: Router, private loginService: LoginService) {}
  
  login: string = this.loginService.userLogin

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  onClick():void{
    this.navigateToRoute('')
  }

}
