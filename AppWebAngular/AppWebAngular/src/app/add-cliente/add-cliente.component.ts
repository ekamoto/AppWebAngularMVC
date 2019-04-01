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

  constructor(private clienteServ: ClienteService) { }

  ngOnInit() {
    
  }

  public addClienteRepos(clienteForm: NgForm) {
    
    var cliente = new Cliente();
    cliente.nome = clienteForm.value.nome;
    cliente.email = clienteForm.value.email;
    cliente.telefone = clienteForm.value.telefone;

    this.clienteServ.addClienteRepos(cliente).subscribe((data) => {
      
      console.log(data);
    });
  }

}

