import { Automovel } from './models/automovel';
import { CadastrarAutomovelComponent } from './components/views/automovel/cadastrar-automovel/cadastrar-automovel.component';
import { ListarAutomovelComponent } from './components/views/automovel/listar-automovel/listar-automovel.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: "",
        component: ListarAutomovelComponent
    },
    {
        path: "automovel/listar",
        component: ListarAutomovelComponent
    },
    {
        path: "automovel/cadastrar",
        component: CadastrarAutomovelComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }