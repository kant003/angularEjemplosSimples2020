import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { Example1Component } from './components/example1/example1.component';
import { Example10Component } from './components/example10/example10.component';
import { Example11Component } from './components/example11/example11.component';
import { Example12PadreComponent } from './components/example12-padre/example12-padre.component';
import { Example13PadreComponent } from './components/example13-padre/example13-padre.component';
import { Example14Component } from './components/example14/example14.component';
import { Example15Component } from './components/example15/example15.component';
import { Example16Component } from './components/example16/example16.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { Example4Component } from './components/example4/example4.component';
import { Example5Component } from './components/example5/example5.component';
import { Example6Component } from './components/example6/example6.component';
import { Example7Component } from './components/example7/example7.component';
import { Example8Component } from './components/example8/example8.component';
import { Example9Component } from './components/example9/example9.component';

const routes: Routes = [
  {path: 'ejemplo1', component: Example1Component},
  {path: 'ejemplo2', component: Example2Component},
  {path: 'ejemplo3', component: Example3Component},
  {path: 'ejemplo4', component: Example4Component},
  {path: 'ejemplo5', component: Example5Component},
  {path: 'ejemplo6', component: Example6Component},
  {path: 'ejemplo7', component: Example7Component},
  {path: 'ejemplo8', component: Example8Component},
  {path: 'ejemplo9', component: Example9Component},
  {path: 'ejemplo10', component: Example10Component},
  {path: 'ejemplo11', component: Example11Component},
  {path: 'ejemplo12', component: Example12PadreComponent},
  {path: 'ejemplo13', component: Example13PadreComponent},
  {path: 'ejemplo14', component: Example14Component},
  {path: 'ejemplo15', component: Example15Component},
  {path: 'ejemplo16', component: Example16Component},
  {path: '**', component: BienvenidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
