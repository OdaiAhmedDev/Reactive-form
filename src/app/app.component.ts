import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  log(x) {
    console.log(x);
  }

  formlog(f) {
    console.log(f);
  }
}
