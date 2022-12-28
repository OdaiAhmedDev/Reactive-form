import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidtors {
  static contineSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return {
        conntContineSpace: true
      };
    } else {
      return null;
    }
  }
}
