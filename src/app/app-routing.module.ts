import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SolutionsComponentComponent } from './solutions-component/solutions-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponentComponent},
  {path: 'portfolio', component: PortfolioComponentComponent},
  {path: 'solutions', component: SolutionsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
