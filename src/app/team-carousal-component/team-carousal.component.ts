import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
 
@Component({
  selector: 'app-team-carousal',
  templateUrl: './team-carousal.component.html',
  styleUrls: ['./team-carousal.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: false, showIndicators: true } }
  ]
})
export class TeamCarousalComponent {}