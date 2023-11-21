import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateThoughtComponent} from "./component/thoughts/create-thought/create-thought.component";
import {ListThoughtComponent} from "./component/thoughts/list-thought/list-thought.component";
import {DeleteThoughtComponent} from "./component/thoughts/delete-thought/delete-thought.component";
import {EditThoughtComponent} from "./component/thoughts/edit-thought/edit-thought.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full'
  },
  {
    path: 'createThought',
    component: CreateThoughtComponent
  },
  {
    path: 'listThought',
    component: ListThoughtComponent
  },
  {
    path: 'thought/deleteThought/:id',
    component: DeleteThoughtComponent
  },
  {
    path: 'thought/editThought/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
