import { Component, OnInit } from '@angular/core';
import { SolutionsList } from '../models/SolutionsList';

import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-solutions-component',
  templateUrl: './solutions-component.component.html',
  styleUrls: ['./solutions-component.component.css']
})
export class SolutionsComponentComponent implements OnInit {

  solutionsList:SolutionsList[];
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Solutions');
    this.meta.addTag({name:'description', content:'gNEX Solutions'});
    this.meta.addTag({name: 'author', content: 'gNEX Solutions'}); 
    this.meta.addTag({name: 'keywords', content: 'Web designing and developmnet, Mobile app development, Graphic design, Brandig, Business automation'});
    this.meta.addTag({property: 'og:title', content: "Solutions"}); 
    this.meta.addTag({property: 'og:type', content: "website"});  
   }

  
  ngOnInit() {
    this.solutionsList = [
      {
        id: 0,
        header: "Web designing and development",
        image: "./assets/img/solutions/web-development.png",
        description: "Looking for a customized website for your business? Our team can help you be the best by building the idea you have in your mind. Occupying the latest technologies along with industry best practices, let us show you how to turn your mere online presence to a powerful e-commerce platform which embarks your brand.",
        status: 0
      },
      {
        id: 1,
        header: "Mobile app development",
        image: "./assets/img/solutions/mobile-app-development.png",
        description: "In an era of increasing smart phone usage, we provide promising solutions to make your business 100% future proof with applications that are one touch away. Our Mobile Application Development engages cross-platform practices to deliver simple, user-friendly solutions that can scale up your business.",
        status: 0
      },
      {
        id: 2,
        header: "Business Automation",
        image: "./assets/img/solutions/bussiness-automation.png",
        description: "Whether you want to streamline your operations or reduce the amount of errors, our team is ready to work with you to transform your business from manual operations to automated business processes through software solutions that work and integrate. ",
        status: 0
      },
      {
        id: 3,
        header: "Graphic designing",
        image: "./assets/img/solutions/graphic.png",
        description: "You tell your idea; we do the rest. Our creative graphic designers are willing to design your company logo, brochures, business stationary and other corporate materials with quality visual designs.",
        status: 0
      },
      {
        id: 4,
        header: "Branding",
        image: "./assets/img/solutions/digital-marketing.png",
        description: "Let us show you how to take your business to the next level from where you are today. gNEX ensures boosting your exposure with professional branding content to make you thrive for excellence.",
        status: 0
      },

    ]
  }
  
  toggle(id:number) {
    
    if(this.solutionsList[id].status == 0){
     this.solutionsList[id].status = 1;
    }
    else{
      this.solutionsList[id].status = 0;
     }
    
  }
}
