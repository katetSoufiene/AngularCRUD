
import { IPolicy } from './../models/policy.model';
import { Component, OnInit } from '@angular/core';
import { PoliciesService } from '../services/policies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  policies: IPolicy[];
  constructor(private policiesService: PoliciesService, private _router: Router) { }

  ngOnInit() {
    this.GetPolicies();
  }

  private GetPolicies() {
    this.policiesService.getPolicies().subscribe(res => {
      this.policies = res;
    });
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/policies/edit', employeeId]);
  }

  removePolictk(policyNumber: number) {
    this.policiesService.deletePolicy(policyNumber).subscribe(
      () => this.GetPolicies(),
      (err: any) => console.log(err)
    );
  }

}
