import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Retorno } from '../../shared/class/retorno';
import { Observable, of } from 'rxjs';

import { map, filter, tap, catchError } from "rxjs/operators";

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getClientesRepos(){

    //Jeito 1
    //return this.httpClient.get('Home/GetClientes/').
    //  pipe(filter((item: Cliente[]) => item[0].Nome != "teste"),
    //    map((item: any[]) => item.map(p => <Cliente>
    //                {
    //                    Nome: p.Nome,
    //                    Email: p.Email,
    //                    Telefone: p.Telefone
    //    })));

    // Jeito 2
    return this.httpClient.get('Home/GetClientes/').
      pipe(map((item: Cliente[]) => item));

    // Jeito 3
    //return this.httpClient.get('Home/GetClientes/');
  }

  getClientesPorEmailEConcatenarTelefoneComNome(email: string) {

    email = email.trim();
    if (email == "") {

      return this.getClientesRepos();
    }

    return this.httpClient.get('Home/GetClientes/').
      pipe(map((listaCliente: Cliente[]) =>
        listaCliente.filter(cliente => cliente.Email.indexOf(email) > -1)
      ),
      map((cliente: Cliente[]) =>
      cliente.map((cli: Cliente) => <Cliente>
          {
            Id: cli.Id,
            Nome: cli.Nome + "("+cli.Telefone+")",
            Email: cli.Email,
            Telefone: cli.Telefone
      })));
  }

  addClienteRepos(cliente: Cliente): Observable<Retorno> {

    return this.httpClient.post<Retorno>('Home/AddCliente/', cliente);
  }

  removerClienteRepos(idCliente: number): Observable<Retorno> {

    return this.httpClient.delete<Retorno>('Home/RemoverCliente/' + idCliente);
  }
}
