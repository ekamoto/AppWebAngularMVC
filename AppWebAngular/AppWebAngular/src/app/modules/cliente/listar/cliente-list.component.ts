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
  public msg;

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

    //this.clienteServ.getClientesPorEmailEConcatenarTelefoneComNome().subscribe((data) => {

    //  this.listClientes = data;
    //});
    
    // Jeito 1, 2
    //this.clienteServ.getClientesRepos().subscribe((data: Cliente[]) => {

    //  this.listClientes = data;
    //});
  }

  public modelChanged(email) {

    this.clienteServ.getClientesPorEmailEConcatenarTelefoneComNome(email).subscribe((data) => {

      this.listClientes = data;
    });
  }

  public removerCliente(idCliente) {

    this.clienteServ.removerClienteRepos(idCliente).subscribe((data) => {
      
      this.msg = data.Mensagem;

      if (data.Codigo == 200)
      {
        this.loadClienteRepos();
      }
    });
  }
}
