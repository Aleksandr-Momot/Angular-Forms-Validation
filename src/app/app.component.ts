import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
// tslint:disable-next-line: typedef
  constructor() {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray ([])
    }); 
  }
  ngOnInit() {
      
  }
// tslint:disable-next-line: typedef
  submit() {
    console.log('Form Submited:' , this.form);
    const formData = {...this.form.value};

    console.log('Form Data:', formData);

    this.form.reset();
  }

  // tslint:disable-next-line: typedef
  setCapital() {
    const cityMap = [
      {
        key: 'ru',
        name: 'Москва',
      },
      {
        key: 'ua',
        name: 'Киев',
      },
      {
        key: 'by',
        name: 'Минск',
      }
    ];
    const cityCountry = this.form.value.address.country as string;
    if (cityMap.find(x => x.key === cityCountry)) {
      this.form.patchValue({address: {city: cityMap.find(x => x.key === cityCountry)?.name}});
    }
  }

  // tslint:disable-next-line: typedef
  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
}
