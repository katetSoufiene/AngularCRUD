import { Gender } from './../models/Gender';
import { IPolicy } from './../models/policy.model';
import { PoliciesService } from './../services/policies.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {
  policyForm: FormGroup;
  genderGroup: FormGroup;
  policy: IPolicy;
  pageTitle: string;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private policiesService: PoliciesService,
    private router: Router) { }

  formErrors = {
    'name': '',
    'age': '',
    'gender': '',
  };

  validationMessages = {
    'name': {
      'required': ' Name is required.',
      'minlength': ' Name must be greater than 2 characters.',
      'maxlength': ' Name must be less than 50 characters.'
    },
    'age': {
      'required': 'age is required.',
      'min': 'age must be greater than 0 .',
      'max': 'agee must be less than 150 .'
    }
  };

  ngOnInit() {
    this.policyForm = this.fb.group({
      policyNumber: [''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(150)]],
      gender: ['0'],
    });

    this.policyForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.policyForm);
    });

    this.route.paramMap.subscribe(params => {
      const policyId = +params.get('id');
      if (policyId) {
        this.getPolicy(policyId);
      }
    });

    this.route.paramMap.subscribe(params => {
      const policyId = +params.get('id');
      if (policyId) {
        this.pageTitle = 'Edit Policy';
        this.getPolicy(policyId);
      } else {
        this.pageTitle = 'Create Policy';
        this.policy = {
          policyHolder: {
            name: '',
            age: null,
            gender: Gender.Male,
          },
        };
      }
    });

  }

  getPolicy(id: number) {
    this.policiesService.getPolicy(id)
      // .subscribe(
      //    (policy: IPolicy) => this.editPolicy(policy),
      //    (err: any) => console.log(err)
      //  );

      .subscribe(
        (policy: IPolicy) => {
          // Store the employee object returned by the
          // REST API in the employee property
          this.policy = policy;
          // this.policy.policyHolder.gender = (policy.policyHolder.gender === "0") ? "feMale" : "male";
          this.editPolicy(policy);
        },
        (err: any) => console.log(err)
      );
  }

  editPolicy(policy: IPolicy) {
    // console.log(policy);
    this.policyForm.patchValue({
      name: policy.policyHolder.name,
      age: policy.policyHolder.age,
      gender: policy.policyHolder.gender === Gender.Male ? "0" : "1",
    });
  }


  onSubmit(): void {
    this.mapFormValuesToPolicyModel();
    if (this.policy.id) {
      this.policiesService.updatePolicy(this.policy).subscribe(
        () => this.router.navigate(['policies']),
        (err: any) => console.log(err)
      );
    } else {
      this.mapFormValuesToPolicyModel();
      console.log(this.policy);
      this.policiesService.addPolicy(this.policy).subscribe(
        () => this.router.navigate(['policies']),
        (err: any) => console.log(err)
      );
    }
  }

  mapFormValuesToPolicyModel() {
    this.policy.policyHolder.name = this.policyForm.value.name;
    this.policy.policyHolder.age = this.policyForm.value.age;
    this.policy.policyHolder.gender = this.policyForm.value.gender;
  }

  onLoadDataClick(): void {
    // this.logValidationErrors(this.policyForm);
    // console.log(this.formErrors);
  }



  logValidationErrors(group: FormGroup = this.policyForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      // abstractControl.value !== '' (This condition ensures if there is a value in the
      // form control and it is not valid, then display the validation error)
      if (abstractControl && !abstractControl.valid &&
        (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }

}
