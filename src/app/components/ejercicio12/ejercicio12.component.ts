import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.component.html',
  styleUrls: ['./ejercicio12.component.css']
})
export class Ejercicio12Component implements OnInit {

  constructor(public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getListaPokemons().subscribe(
      pokemons => {

      }
    )
  }

}
