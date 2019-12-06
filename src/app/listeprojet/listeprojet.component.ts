import { Component, OnInit } from "@angular/core";
import { ProjetsService } from "../Services/projets.service";
import { Router } from "@angular/router";
import { Projet } from "../Classes/projet";

@Component({
  selector: "app-listeprojet",
  templateUrl: "./listeprojet.component.html",
  styleUrls: ["./listeprojet.component.css"]
})
export class ListeprojetComponent implements OnInit {
  objets: any[];
  projet = new Projet();
  temoin = false;
  i = -1;
  constructor(private projectService: ProjetsService, private router: Router) {}

  ngOnInit() {
    this.objets = this.projectService.tableau;
    console.log(this.objets);
  }

  modifier(o, a) {
    this.temoin = true;
    this.projet = o;
    this.i = a;
  }

  validermodification() {
    this.projectService.tableau[this.i] = this.projet;
    this.temoin = false;
  }
  supprimer(o) {
    this.projectService.tableau.splice(o, 1);
  }
}
