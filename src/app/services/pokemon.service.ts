import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // No olvide incluir HttpClientModule en el fichero app.module.ts
  constructor(private httpClient: HttpClient) { }

  getListaPokemons(cantidad: number=200): Observable<any>{
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${cantidad}&offset=0`
    return this.httpClient.get(url)
  }

  getDatosPokemon(id: number): Observable<any>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    return this.httpClient.get(url)
  }
}
