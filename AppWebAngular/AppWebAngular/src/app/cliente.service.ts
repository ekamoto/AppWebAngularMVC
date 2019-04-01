import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

import { map } from "rxjs/operators";

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  getClientesRepos(){

    console.log("Entrou no service");
    //return null;

    return this.httpClient.get('Home/GetClientes/').
            pipe(
              map((item: any) => item.map(p => <Cliente>
                    {
                        nome: p.Nome,
                        email: p.Email,
                        telefone: p.Telefone
                    })));
 
    }
}
