import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormValidation } from './../../utils/form-validation/form-validation.util';

@Component({
  selector: 'pcu-alert-message',
  templateUrl: './alert-messageComponent.component.html',
  styleUrls: ['./alert-messageComponent.component.scss']
})
export class AlertMessageComponent {

  @Input()
  control?: FormControl | FormGroup;

  get errorMessage(): string | null {

    if (this.control && this.control.errors) {

      for (const nameProperty in this.control.errors) {
        if (this.control.errors.hasOwnProperty(nameProperty) && this.control.touched) {
          return FormValidation.getAlertMessage(nameProperty, this.control.errors[nameProperty]);
        }
      }
    }
    return null;
  }
}
