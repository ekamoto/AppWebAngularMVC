import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public repoClientes;

  constructor(private clienteServ: ClienteService) { }

  ngOnInit() {
    console.log("carregando");
    this.loadClienteRepos();
  }

  public loadClienteRepos() {

    this.clienteServ.getClientesRepos().subscribe((data) => {
      console.log(data);
      this.repoClientes = data;
    });
  }
}
