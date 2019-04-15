import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  public listClientes;

  constructor(private clienteServ: ClienteService) { }

  ngOnInit() {
    this.loadClienteRepos();
  }

  public loadClienteRepos() {

    // Posso mapear o retorno no service ou aqui na chamada
    // Acredito que aqui já deve vir no formato correto

    // Jeito 3
    this.clienteServ.getClientesRepos().subscribe((data) => {
      
      this.listClientes = data;
    });

    // Jeito 1, 2
    //this.clienteServ.getClientesRepos().subscribe((data: Cliente[]) => {

    //  this.listClientes = data;
    //});
  }
}
