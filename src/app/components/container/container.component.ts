import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  onClick():void{
    alert(
      `
      Utilize as credenciais para testar:
      Login: admin  -  Senha: admin
      Login: user  -  Senha: user
      `
    )
  }

}
