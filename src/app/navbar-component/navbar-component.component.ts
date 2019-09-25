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
   var wid = document.getElementById("mySidenav").style.width;
    if( wid != "250px"){
      document.getElementById("mySidenav").style.width = "250px";
      $(".menu-trigger-icon-1").css("transform", "translateY(6px) rotate(135deg)");
      $(".menu-trigger-icon-2").css("transform", "translateY(-6px) rotate(-135deg)");
      $(".menu-trigger-icon-3").css("transform", "scale(0)");
    }
    else{
      this.closeNav() ;
      $(".menu-trigger-icon-1").css("transform", "translateY(0px) rotate(0deg)");
      $(".menu-trigger-icon-2").css("transform", "translateY(0px) rotate(0deg)");
      $(".menu-trigger-icon-3").css("transform", "unset");
    }
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
