import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  
  @Input()
  hrefLink: any;
  
  constructor() { 
   
  }

  ngOnInit() {
    this.hrefLink ="home-solutions";
    window.addEventListener('scroll', this.scroll, true);

    $(document).ready(function() {
       
      $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

    }); 

  }
  
  scroll = (): void => {
    var next_ection_button = document.getElementById("next-section-button");
    var scrollTop = $(window).scrollTop();
    
    if(scrollTop>=0 && scrollTop<630 ){
      this.hrefLink ="home-solutions";
      next_ection_button.style.webkitAnimation ="sdb05 1.5s infinite";
      next_ection_button.style.animation = "sdb05 1.5s infinite";
    }
    else if(scrollTop>=630 && scrollTop<1157){
      this.hrefLink ="home-portfolio";
      next_ection_button.style.webkitAnimation ="sdb05 1.5s infinite";
      next_ection_button.style.animation = "sdb05 1.5s infinite";
    }
    else if(scrollTop>=1157 && scrollTop<1987){
      this.hrefLink ="home-team-carousal";
      next_ection_button.style.webkitAnimation ="sdb05 1.5s infinite";
      next_ection_button.style.animation = "sdb05 1.5s infinite";
    }
    else if(scrollTop>=1987 && scrollTop<3000){
      this.hrefLink ="contact-us";
      next_ection_button.style.webkitAnimation ="sdb05 1.5s infinite";
      next_ection_button.style.animation = "sdb05 1.5s infinite";
    }
    else{
      this.hrefLink ="home-carousal";
      next_ection_button.style.webkitAnimation ="sdb05_inverse 1.5s infinite";
      next_ection_button.style.animation = "sdb05_inverse 1.5s infinite";
    }

    // -webkit-animation:spin 4s linear infinite;
    // -moz-animation:spin 4s linear infinite;
    // animation:spin 4s linear infinite;
    // -webkit-animation: sdb05_inverse 1.5s infinite;
    // animation: sdb05_inverse 1.5s infinite;

  };


}
