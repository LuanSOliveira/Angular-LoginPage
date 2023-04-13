import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BotaoComponent } from './components/botao/botao.component';
import { LogoComponent } from './components/logo/logo.component';
import { BemVindoComponent } from './components/bem-vindo/bem-vindo.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormularioComponent,
    BotaoComponent,
    LogoComponent,
    BemVindoComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
