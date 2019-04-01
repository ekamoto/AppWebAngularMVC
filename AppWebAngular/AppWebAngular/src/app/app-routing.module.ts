import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';

const routes: Routes = [
  {
    path: "clientes",
    component: ClienteListComponent
  },
  {
    path: "add-cliente",
    component: AddClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
