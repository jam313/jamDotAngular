import { NgModule } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { SharedModule } from "../shared";
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ChangeLogComponent } from './change-log/change-log.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PeopleComponent,
    HomeComponent,
    BlogComponent,
    ChangeLogComponent,
    RecommendationsComponent,
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [NavbarComponent]
})
export class ComponentsModule { }
