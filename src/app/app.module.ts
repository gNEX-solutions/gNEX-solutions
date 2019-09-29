import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SolutionsComponentComponent } from './solutions-component/solutions-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamCarousalComponent } from './team-carousal-component/team-carousal.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeCarousalComponentComponent } from './home-carousal-component/home-carousal-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutusComponentComponent } from './aboutus-component/aboutus-component.component';
import { TeamcardsComponentComponent } from './team-cards-component/teamcards-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    FooterComponentComponent,
    PortfolioComponentComponent,
    SolutionsComponentComponent,
    TeamCarousalComponent,
    HomeCarousalComponentComponent,
    HomeComponentComponent,
    AboutusComponentComponent,
    TeamcardsComponentComponent
  ],
  imports: [
    BrowserModule, CarouselModule,FontAwesomeModule,
    AppRoutingModule, NgbModule, CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, HomeCarousalComponentComponent]
})
export class AppModule { }
