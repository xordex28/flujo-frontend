import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SeguridadRoutingModule } from './seguridad.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
