import { Injectable } from "@angular/core";

import { Projet } from "../Classes/projet";

@Injectable({
  providedIn: "root"
})
export class ProjetsService {
  public tableau = [
    {
      nom: "CGI",
      description: "Projet web",
      status: "En cours"
    },
    {
      nom: "CAp",
      description: "app mobile",
      status: "Livré"
    }
  ];
  constructor() {}
  getobjet(par) {
    {
      for (const e of this.tableau) if (e.nom == par) return e;
      return null;
    }
  }
}
