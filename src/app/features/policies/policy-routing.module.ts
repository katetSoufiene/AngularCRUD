import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

// Import the components so they can be referenced in routes
import { CreatePolicyComponent } from './create-policy.component';
import { PoliciesComponent } from './policies.component';
import { CreatePolicyCanDeactivateGuardService } from '../services/create-policy-can-deactivate-gaurd.service';


// the route to redirect to if the client side path is empty.
const appRoutes: Routes = [
    { path: '', component: PoliciesComponent },
    { path: 'create', component: CreatePolicyComponent },
    {
        path: 'create',
        component: CreatePolicyComponent,
        canDeactivate: [CreatePolicyCanDeactivateGuardService],
    },
    { path: 'edit/:id', component: CreatePolicyComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)],
    exports: [RouterModule],
    providers: [
        CreatePolicyCanDeactivateGuardService
    ],
})
export class PolicyRoutingModule { }
