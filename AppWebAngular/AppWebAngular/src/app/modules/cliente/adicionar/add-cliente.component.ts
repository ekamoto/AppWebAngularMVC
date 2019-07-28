import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  public msg;

  constructor(private clienteServ: ClienteService) { }

  ngOnInit() {
    
  }

  public addClienteRepos(clienteForm: NgForm) {
    
    var cliente = new Cliente();
    cliente.Nome = clienteForm.value.Nome;
    cliente.Email = clienteForm.value.Email;
    cliente.Telefone = clienteForm.value.Telefone;

    this.clienteServ.addClienteRepos(cliente).subscribe((data) => {
      this.msg = data.Mensagem;
      //console.log(data');
    });
  }

}

