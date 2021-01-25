import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input()
  itaration_val: any;
  @Input()
  header: string;
  @Input()
  description: string;
  @Input()
  image: string;
  xx:string;
  constructor() { }

  ngOnInit() {
    }

    addclass(k:string){
      $('#'+k).toggleClass('expand');
      document.getElementById(this.xx).setAttribute("style","z-index:1");
    }

    removeclass(k:string){
      $('#'+k).toggleClass('expand');
      event.stopPropagation();
      document.getElementById(this.xx).setAttribute("style","z-index:1");
    }

    circle_plus(k:string){
      this.xx = 'circle-plus_'+k;
      document.getElementById(this.xx).setAttribute("style","z-index:3");
      $('#circle-plus_'+k).toggleClass('opened');
    }
}
