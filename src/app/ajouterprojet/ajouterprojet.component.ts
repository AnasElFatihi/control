import { Component, OnInit } from "@angular/core";
import { Projet } from "../Classes/projet";
import { ProjetsService } from "../Services/projets.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-ajouterprojet",
  templateUrl: "./ajouterprojet.component.html",
  styleUrls: ["./ajouterprojet.component.css"]
})
export class AjouterprojetComponent implements OnInit {
  projet = new Projet();

  constructor(private projetService: ProjetsService, private router: Router) {}

  add() {
    this.projetService.tableau.push(this.projet);
    this.router.navigate(["listeprojet"]);
  }
  ngOnInit() {}
}
