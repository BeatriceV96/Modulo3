import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
import { DetailComponent } from './pages/detail/detail.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' }, //sugli indirizzi vuoti e' meglio mettere patchMath:full//
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'app-detail/:id', component:DetailComponent },
  { path: '**', redirectTo:'/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
