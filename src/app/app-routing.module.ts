import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { NombreEmpresaComponent } from './components/nombre-empresa/nombre-empresa.component';

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'nombre-empresa', component: NombreEmpresaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
