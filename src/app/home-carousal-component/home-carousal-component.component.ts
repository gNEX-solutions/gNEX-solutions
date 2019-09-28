import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-carousal-component',
  templateUrl: './home-carousal-component.component.html',
  styleUrls: ['./home-carousal-component.component.css'],
  providers: [{provide: CarouselConfig, useValue: { interval: 15000, noPause: true, showIndicators: true } }]  
})
export class HomeCarousalComponentComponent implements OnInit {

    images = [1, 2, 3].map(() => '../assets/img/home/gnex_home_image_1.jpg');
    condition1 = true;
    condition2 = true;
    condition3 = true;

    constructor() {

    }

  ngOnInit() {

      setInterval(()=> {
        // this.condition1 = false;
      },4000); 
    }

}
