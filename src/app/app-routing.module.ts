import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MigrateComponent } from './migrate/migrate/migrate.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/inicio'
  }
  , {
    path: 'inicio',
    children: [
      { path: '', pathMatch: 'full', component: InicioComponent }
    ]
  },
  { path: 'migrate', component: MigrateComponent },
  {
    path: 'seguridad', loadChildren: () =>
      import('./seguridad/seguridad.module').then(m => m.SeguridadModule)
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
