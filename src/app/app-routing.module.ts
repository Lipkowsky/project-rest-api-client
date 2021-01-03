import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjektComponent } from './projekt/projekt.component';
import { ProjektyComponent } from './projekty/projekty.component';
import { ZadanieComponent } from './zadanie/zadanie.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projekty', component: ProjektyComponent },
  { path: 'zadanie/:zadanie_id', component: ZadanieComponent },
  { path: 'projekt/:projekt_id', component: ProjektComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
