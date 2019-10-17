import { CreatePolicyComponent } from './../policies/create-policy.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class CreatePolicyCanDeactivateGuardService
    implements CanDeactivate<CreatePolicyComponent> {

    constructor() { }

    canDeactivate(component: CreatePolicyComponent): boolean {
        if (component.policyForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }

        return true;
    }
}