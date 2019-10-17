import { SharedModule } from './../../shared/shared.module';
import { PolicyRoutingModule } from './policy-routing.module';

import { NgModule } from '@angular/core';



import { PoliciesComponent } from './policies.component';
import { CreatePolicyComponent } from './create-policy.component';
import { PolicyGenderPipe } from 'src/app/shared/policyGender.pipe';


@NgModule({
  declarations: [PoliciesComponent, CreatePolicyComponent, PolicyGenderPipe],
  imports: [
    PolicyRoutingModule,
    SharedModule
  ]
})
export class PolicyModule { }
