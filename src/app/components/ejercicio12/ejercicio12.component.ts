import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.component.html',
  styleUrls: ['./ejercicio12.component.css']
})
export class Ejercicio12Component implements OnInit {
  listaPokemons
  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.refrescarListaPokemons(10)
  }
  refrescarListaPokemons(cantidad: number){
    this.pokemonService.getListaPokemons(cantidad).subscribe(
      pokemons => {
        this.listaPokemons = pokemons.results
      }
    )
  }

}
