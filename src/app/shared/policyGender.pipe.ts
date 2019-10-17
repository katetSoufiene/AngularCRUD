import { Gender } from './../features/models/Gender';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'policyGender'
})
export class PolicyGenderPipe implements PipeTransform {
    transform(gender: Gender): string {
        if (gender === Gender.Male) {
            return "Male";
        } else {
            return "FeMale";
        }
    }
}
