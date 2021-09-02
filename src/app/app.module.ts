import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NombreEmpresaComponent } from './components/nombre-empresa/nombre-empresa.component';
import { ArticulosComponent } from './components/articulos/articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NombreEmpresaComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
