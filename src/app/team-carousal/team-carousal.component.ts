import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-team-carousal',
  templateUrl: './team-carousal.component.html',
  styleUrls: ['./team-carousal.component.css']
})
export class TeamCarousalComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {  
    config.interval = 1000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnInit() {  
  }  

}
