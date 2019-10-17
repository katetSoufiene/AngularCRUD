
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';


import { PoliciesService } from './features/services/policies.service';


import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent, HomeComponent,
    PageNotFoundComponent],
  imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule,
    AppRoutingModule],
  providers: [
    PoliciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
