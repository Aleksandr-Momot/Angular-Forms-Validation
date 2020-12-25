
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs';


export class MyValidators {
    static restrictedEmails(control: FormControl): {[key: string]: boolean} {
      if (['123@mail.ru', 'test@mail.ru'].includes(control.value)) {
        return {restrictedEmail: true};
      }
      return {restrictedEmail: false};
    }

    static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
      return new Promise(resolve => {
        setTimeout(() => {
          if (control.value === 'async@mail.ru') {
            resolve({uniqEmail: true});
          } else {
            resolve(null);
          }
        }, 1000);
      });
    }
  }
