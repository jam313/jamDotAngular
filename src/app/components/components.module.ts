import { NgModule } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { SharedModule } from "../shared";

@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    PeopleComponent,
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [NavbarComponent]
})
export class ComponentsModule { }
