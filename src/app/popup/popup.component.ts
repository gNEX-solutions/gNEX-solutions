import { Component, OnInit,Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input()
  itaration_val: number;
  @Input()
  header: string;
  @Input()
  description: string;
  xx:string;
  constructor() { }

  ngOnInit() {
    // alert(this.itaration_val);

    }

    addclass(k:string){
      // document.getElementById(k).classList.add('expand');
      $('#'+k).toggleClass('expand');
      document.getElementById(this.xx).setAttribute("style","z-index:1");
    }

    removeclass(k:string){
      // alert(document.getElementById(k));
      // document.getElementById(k).setAttribute("style","background:#ffffff");
      // document.getElementById(k).classList.remove('expand');
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
