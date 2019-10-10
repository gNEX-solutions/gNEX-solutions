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
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';
import { PricingComponentComponent } from './pricing-component/pricing-component.component';
import { FacebookModule } from 'ngx-facebook';
import { AboutusVisionMissionComponenetComponent } from './aboutus-vision-mission-componenet/aboutus-vision-mission-componenet.component';
import { AboutusSliderComponenetComponent } from './aboutus-slider-componenet/aboutus-slider-componenet.component';
import { PricingWebComponentComponent } from './pricing-web-component/pricing-web-component.component';
import { PricingBrandingComponentComponent } from './pricing-branding-component/pricing-branding-component.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    TeamcardsComponentComponent,
    HomePortfolioComponent,
    TeamcardsComponentComponent,
    HomePortfolioComponent,
    PopupComponent,
    PricingComponentComponent,
    AboutusVisionMissionComponenetComponent,
    AboutusSliderComponenetComponent,
    PricingWebComponentComponent,
    PricingBrandingComponentComponent,
  ],
  imports: [
    BrowserModule, CarouselModule,FontAwesomeModule,FormsModule,BrowserModule,HttpClientModule,
    AppRoutingModule, NgbModule, CarouselModule.forRoot(),FacebookModule.forRoot(),AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent, HomeCarousalComponentComponent]
})
export class AppModule { }
