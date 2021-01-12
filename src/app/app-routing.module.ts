import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';

const routes: Routes = [
  {path: 'ejemplo1', component: Example1Component},
  {path: 'ejemplo2', component: Example2Component},
  {path: 'ejemplo3', component: Example3Component},
  {path: '**', component: BienvenidaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
