import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

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

    this.clienteServ.getClientesRepos().subscribe((data) => {
      
      this.listClientes = data;
    });
  }

}
