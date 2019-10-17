import { Gender } from './Gender';

// "policyNumber":739562,"policyHolder":{"name":"Dwayne Johnson","age":44,"gender":0}

export interface IPolicyHolder {
      name: string;
      age: number;
      gender: Gender;
}
