import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooldalComponent } from './fooldal/fooldal.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ErrorComponent } from './error/error.component';
import { TermekekComponent } from './termekek/termekek.component';
import { AutokComponent } from './autok/autok.component';

const routes: Routes = [
  {path: "Fooldal", component: FooldalComponent},
  {path: "rolunk", component: RolunkComponent},
  {path: "termekek", component: TermekekComponent},
  {path: "autok", component: AutokComponent},
  
  {path:"", redirectTo: "/Fooldal", pathMatch:"full"},

  {path:"**", component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
