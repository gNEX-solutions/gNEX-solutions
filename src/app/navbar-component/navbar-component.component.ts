import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {

  constructor() { }

  public openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }

  
  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  public ngOnInit() {
    $(document).ready(function() {
      $('.menu-trigger').click(function() {
        $('nav ul').slideToggle(500);
      });
      // end slide toggle

      $(window).resize(function() {
        if (  $(window).width() > 500 )
        {
          $('nav ul').removeAttr('style');
         } else {

         }

      });   // end resize
    });   // end ready

  }

}
