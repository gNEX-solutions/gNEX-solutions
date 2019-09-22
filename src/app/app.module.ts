import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamCarousalComponent } from './team-carousal/team-carousal.component';  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    PortfolioComponentComponent,
    TeamCarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
