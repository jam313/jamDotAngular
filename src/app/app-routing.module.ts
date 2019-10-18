import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AboutComponent,
  BlogComponent,
  ChangeLogComponent,
  HomeComponent,
  PeopleComponent,
  RecommendationsComponent
} from "./components";


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'change-log',
    component: ChangeLogComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'recommendations',
    component: RecommendationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
