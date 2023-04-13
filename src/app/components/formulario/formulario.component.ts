import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/IUser';
import { FormService } from 'src/app/services/form.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  textLogin: string = 'Informe o Login'
  textSenha: string = 'Informe a Senha'
  urlLogo: string = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
  tipo: string[] = ['text', 'password']

  login: string = ''
  senha: string = ''

  usuarios: IUser[] = []
  validaLogin: boolean = false

  constructor(private router: Router, private formService: FormService, private loginService: LoginService) {
    this.getUser();
  }

  navigateToRoute(route: string) {
    this.router.navigate([route]);
  }

  Submeter(e: Event): void{
    e.preventDefault()

    console.log('Listagem de usuários:')
    console.log(this.usuarios)
    this.loginService.userLogin = this.login

    this.usuarios.map(
      (usuario) => {
        if(this.login === usuario.name && this.senha === usuario.password){
          this.loginService.userAcesse = true
          this.navigateToRoute('saudacao')
          this.validaLogin = true
        }
      }
    )

    if(this.validaLogin === false){
      alert('Usuário ou senha inválido.')
      this.login = ''
      this.senha = ''
    }
  }

  getUser():void {
    this.formService.getAll().subscribe((users) => (this.usuarios = users))
  }

}
