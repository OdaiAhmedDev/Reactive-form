import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import { UsernameValidtors } from "./Username.validators";
Component({
  selector: "signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
});
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3) //,
      //UsernameValidtors.contineSpace
    ]),
    password: new FormControl("", Validators.required)
  });

  get Username() {
    return this.form.get("username");
  }
}
