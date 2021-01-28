import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-ejercicio12-pokemon-detalle',
  templateUrl: './ejercicio12-pokemon-detalle.component.html',
  styleUrls: ['./ejercicio12-pokemon-detalle.component.css']
})
export class Ejercicio12PokemonDetalleComponent implements OnInit {
  datosPokemon
  constructor(private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    const idPokemon = this.activatedRoute.snapshot.params['id']
    this.pokemonService.getDatosPokemon(idPokemon).subscribe(pokemon =>{
      this.datosPokemon = pokemon
    })
  }

}
