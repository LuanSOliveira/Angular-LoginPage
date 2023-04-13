import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"

import { FormularioComponent } from "./components/formulario/formulario.component";
import { BemVindoComponent } from "./components/bem-vindo/bem-vindo.component";

const routes: Routes = [
    {path: '', component: FormularioComponent},
    {path: 'saudacao', component: BemVindoComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule{}