import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SolutionsComponentComponent } from './solutions-component/solutions-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutusComponentComponent } from './aboutus-component/aboutus-component.component';
import { PricingComponentComponent } from './pricing-component/pricing-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent, data: {animation: 'HomePage'}},
  {path: 'portfolio', component: PortfolioComponentComponent, data: {animation: 'PortfolioPage'}},
  {path: 'solutions', component: SolutionsComponentComponent, data: {animation: 'SolutionsPage'}},
  {path: 'aboutus', component: AboutusComponentComponent, data: {animation: 'AboutPage'}},
  {path: 'pricing', component: PricingComponentComponent, data: {animation: 'E'}},
  {path: 'footer', component: FooterComponentComponent ,data: {animation: 'F'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
