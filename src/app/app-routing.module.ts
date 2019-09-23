import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { SolutionsComponentComponent } from './solutions-component/solutions-component.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponentComponent},
  {path: 'solutions', component: SolutionsComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
