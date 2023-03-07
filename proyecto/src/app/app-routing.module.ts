import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
