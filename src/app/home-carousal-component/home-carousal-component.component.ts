import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousal-component',
  templateUrl: './home-carousal-component.component.html',
  styleUrls: ['./home-carousal-component.component.css']
})
export class HomeCarousalComponentComponent implements OnInit {

  constructor() { }

    images = [1, 2, 3].map(() => '../assets/img/home/gnex_home_image_1.jpg');

  ngOnInit() {
    
  }

}


