import { Component, OnInit } from "@angular/core";
import { ProjetsService } from "../Services/projets.service";
import { Projet } from "../Classes/projet";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detailprojet",
  templateUrl: "./detailprojet.component.html",
  styleUrls: ["./detailprojet.component.css"]
})
export class DetailprojetComponent implements OnInit {
  project = new Projet();

  constructor(
    private projetService: ProjetsService,
    private active: ActivatedRoute
  ) {}

  ngOnInit() {
    this.project = this.projetService.getobjet(
      this.active.snapshot.params["id"]
    );
  }
}
