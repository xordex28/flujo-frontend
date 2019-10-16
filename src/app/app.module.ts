import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
///////// Aplication
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentesMaterial } from './utils/material.module';
////// Modulos
import { SeguridadModule } from './seguridad/seguridad.module';
import { ComponentesModule, entryComponentes } from './componentes/componentes.module';

// Components
import { InicioComponent } from './inicio/inicio.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    AppRoutingModule,
    SeguridadModule,
    componentesMaterial,
    BrowserAnimationsModule,
    ComponentesModule
  ],
  entryComponents: entryComponentes,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
