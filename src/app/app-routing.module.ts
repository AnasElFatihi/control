import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DetailprojetComponent } from "./detailprojet/detailprojet.component";
import { AjouterprojetComponent } from "./ajouterprojet/ajouterprojet.component";
import { ListeprojetComponent } from "./listeprojet/listeprojet.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "listeprojet/:id", component: DetailprojetComponent },
  { path: "notFound", component: NotfoundComponent },
  { path: "listeprojet", component: ListeprojetComponent },
  { path: "add", component: AjouterprojetComponent },
  { path: "**", redirectTo: "notFound" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
