import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Retorno } from '../../shared/class/retorno';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {


  constructor(private httpClient: HttpClient) { }

  getClientesRepos(){

    //Jeito 1
    //return this.httpClient.get('Home/GetClientes/').
    //  pipe(
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

  addClienteRepos(cliente: Cliente): Observable<Retorno> {
    return this.httpClient.post<Retorno>('Home/AddCliente/', cliente);
  }
}
