import {validEmail, validName} from './single-validators/regex.validators';
import {validCpf} from './single-validators/cpf.validators';
import {validPhone} from './single-validators/phone.validators';
import {FormControl} from '@angular/forms';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderValidators {


  constructor () { }


  public emailFormat (control: FormControl): {[key: string]: boolean} {
    return validEmail(control.value) ? null : {'emailFormat': true};
  }


  public nameFormat (control: FormControl): {[key: string]: boolean} {
    return validName(control.value) ? null : {'nameFormat': true};
  }


  public cpfFormat (control: FormControl): {[key: string]: boolean} {
    return validCpf(control.value) ? null : {'cpfFormat': true};
  }


  public phoneFormat (control: FormControl): {[key: string]: boolean} {
    return validPhone(control.value) ? null : {'phoneFormat': true};
  }
}
