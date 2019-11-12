import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
///////// Aplication
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componentesMaterial } from './utils/material.module';
////// Modulos
import { ComponentesModule, entryComponentes } from './componentes/componentes.module';

// Components
import { InicioComponent } from './inicio/inicio.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MigrateComponent } from './migrate/migrate/migrate.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MigrateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ComponentesModule,
    AppRoutingModule,
    componentesMaterial,
    BrowserAnimationsModule,
    ComponentesModule
  ],
  entryComponents: entryComponentes,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
