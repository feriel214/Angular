import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './components/person/person.component';
import { PersonAddComponent } from './components/person-add/person-add.component';
import { PersonEditComponent } from './components/person-edit/person-edit.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list/person' },
  { path: 'create', component: PersonAddComponent },
  { path: 'edit/:id', component: PersonEditComponent },
  { path: 'list/person',component: PersonComponent } 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
