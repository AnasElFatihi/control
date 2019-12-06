import { Component, OnInit } from "@angular/core";
import { User } from "../Classes/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.user.login == "admin" && this.user.password == "admin") {
      this.router.navigate(["listeprojet"]);
      localStorage.setItem("user", this.user.login);
    }
  }
}
