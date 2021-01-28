import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { MenuComponent } from './components/menu/menu.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Example6Component } from './components/example6/example6.component';
import { Example7Component } from './components/example7/example7.component';
import { Example8Component } from './components/example8/example8.component';
import { Example9Component } from './components/example9/example9.component';
import { Example10Component } from './components/example10/example10.component';
import { ParesMayusculaPipe } from './pares-mayuscula.pipe';
import { Example11Component } from './components/example11/example11.component';
import { Example12PadreComponent } from './components/example12-padre/example12-padre.component';
import { Example12HijoComponent } from './components/example12-hijo/example12-hijo.component';
import { Example13HijoComponent } from './components/example13-hijo/example13-hijo.component';
import { Example13PadreComponent } from './components/example13-padre/example13-padre.component';
import { Example14Component } from './components/example14/example14.component';
import { Example15Component } from './components/example15/example15.component';
import { Example16Component } from './components/example16/example16.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Example17Component } from './components/example17/example17.component';
import { Example18Component } from './components/example18/example18.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';
import { Ejercicio18Component } from './components/ejercicio18/ejercicio18.component';
import { Ejercicio4Component } from './components/ejercicio4/ejercicio4.component';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Ejercicio7Component } from './components/ejercicio7/ejercicio7.component';
import { Ejercicio12Component } from './components/ejercicio12/ejercicio12.component';
import { HttpClientModule } from '@angular/common/http';
import { Ejercicio15Component } from './components/ejercicio15/ejercicio15.component';
import { Ejercicio12PokemonDetalleComponent } from './components/ejercicio12-pokemon-detalle/ejercicio12-pokemon-detalle.component';
import { Ejercicio14Component } from './components/ejercicio14/ejercicio14.component';
import { Ejercicio11Component } from './components/ejercicio11/ejercicio11.component';

@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    MenuComponent,
    BienvenidaComponent,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Example8Component,
    Example9Component,
    Example10Component,
    ParesMayusculaPipe,
    Example11Component,
    Example12PadreComponent,
    Example12HijoComponent,
    Example13HijoComponent,
    Example13PadreComponent,
    Example14Component,
    Example15Component,
    Example16Component,
    Example17Component,
    Example18Component,
    Ejercicio1Component,
    Ejercicio18Component,
    Ejercicio4Component,
    Ejercicio7Component,
    Ejercicio12Component,
    Ejercicio15Component,
    Ejercicio12PokemonDetalleComponent,
    Ejercicio14Component,
    Ejercicio11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
