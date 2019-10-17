
import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading, } from '@angular/router';

import { CustomPreloadingService } from './custom-preloading.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { PreloadAllModules } from '@angular/router';

// the route to redirect to if the client side path is empty.
const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // lazy loaded module
  {
    path: 'policies',
    // set the preload property to true, using the route data property
    // If you do not want the module to be preloaded set it to false
    data: { preload: true },
    loadChildren: './features/policies/policy.module#PolicyModule'
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { preloadingStrategy: NoPreloading })],
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingService })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
