import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
