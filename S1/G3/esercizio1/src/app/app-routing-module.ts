import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'activep-posts', component: ActivePostsComponent},
    { path: 'inactive-posts', component: InactivePostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
