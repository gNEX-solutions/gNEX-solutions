import { Component, OnInit, RootRenderer } from '@angular/core';
import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-pricing-web-component',
  templateUrl: './pricing-web-component.component.html',
  styleUrls: ['./pricing-web-component.component.css']
})
export class PricingWebComponentComponent implements OnInit {

  constructor(private title: Title, private meta: Meta) { 
    this.title.setTitle('Pricing');
    this.meta.addTags([
      {name: 'description', content: 'Pricing gNEX Solutions packages'},   
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},   
      {name: 'robots', content: 'INDEX, FOLLOW'},
      {name: 'author', content: 'gNEX Solutions'},
      {name: 'keywords', content: 'Pricing, Web designing and developmnet, Mobile app development, Graphic design, Brandig, Business automation'},
      {httpEquiv: 'Content-Type', content: 'text/html'},
      {property: 'og:title', content: "Pricing"},
      {property: 'og:type', content: "website"},
      {charset: 'UTF-8'}
   ]);    
  }

  ngOnInit() {
  }

}
