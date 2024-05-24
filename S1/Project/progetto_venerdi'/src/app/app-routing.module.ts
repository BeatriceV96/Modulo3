import { Page404Component } from './pages/page404/page404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { AudiComponent } from './pages/audi/audi.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:"home",
    component: HomeComponent,
    title: "home"
  },
  {
    path:"audi",
    component: AudiComponent,
    title: "audi"
  },
  {
    path:"ford",
    component: FordComponent,
    title: "ford"
  },
  {
    path:"fiat",
    component: FiatComponent,
    title: "fiat"
  },
  {
    path:"**",
    component: Page404Component,
    title: "error 404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
