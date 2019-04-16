import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './modules/cliente/listar/cliente-list.component';
import { AddClienteComponent } from './modules/cliente/adicionar/add-cliente.component';

const routes: Routes = [
  {
    path: "cliente/listar",
    component: ClienteListComponent
  },
  {
    path: "cliente/adicionar",
    component: AddClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
