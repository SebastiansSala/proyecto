import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'index', component: IndexComponent},
  {path: 'reservar', component: ReservacionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuComponenteRoutingModule {}
