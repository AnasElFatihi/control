import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { ListeprojetComponent } from './listeprojet/listeprojet.component';
import { DetailprojetComponent } from './detailprojet/detailprojet.component';
import { AjouterprojetComponent } from './ajouterprojet/ajouterprojet.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ListeprojetComponent, DetailprojetComponent, AjouterprojetComponent, NotfoundComponent, MenuComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
