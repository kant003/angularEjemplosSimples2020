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
import { FormsModule } from '@angular/forms';
import { Example6Component } from './components/example6/example6.component';
import { Example7Component } from './components/example7/example7.component';
import { Example8Component } from './components/example8/example8.component';
import { Example9Component } from './components/example9/example9.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
