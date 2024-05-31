import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoCompletesComponent } from './pages/todo-completes/todo-completes.component';
import { UsersTrovatiComponent } from './pages/users-trovati/users-trovati.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'todo-completes',
    component: TodoCompletesComponent
  },
  {
    path: 'users-trovati',
    component: UsersTrovatiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
