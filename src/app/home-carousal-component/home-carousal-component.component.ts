import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-carousal-component',
  templateUrl: './home-carousal-component.component.html',
  styleUrls: ['./home-carousal-component.component.css'],
  providers: [NgbCarouselConfig]  
})
export class HomeCarousalComponentComponent implements OnInit {


    images = [1, 2, 3].map(() => '../assets/img/home/gnex_home_image_1.jpg');

    constructor() {

    }

  ngOnInit() {
    
  }

}
