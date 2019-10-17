
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePolicyComponent } from './create-policy.component';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Gender } from '../models/Gender';
import { PoliciesService } from '../services/policies.service';

describe('CreatePolicyComponent', () => {
  let component: CreatePolicyComponent;
  let fixture: ComponentFixture<CreatePolicyComponent>;
  // tslint:disable-next-line:prefer-const
  let service: PoliciesService;
  // tslint:disable-next-line:prefer-const
  let httpTestingController: HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePolicyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


