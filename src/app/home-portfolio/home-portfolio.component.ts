import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-portfolio',
  templateUrl: './home-portfolio.component.html',
  styleUrls: ['./home-portfolio.component.css']
})
export class HomePortfolioComponent implements OnInit {

   portfolioSlides:any = [{
      active:"active",
      item1:{
        show:"block",
        image:"../assets/img/portfolio/cees.jpg",
        title:"CEES International",
        details:"ceesinternational.com",
        link:"https://www.iceesglobal.com/"
      },
      item2:{
        show:"block",
        image:"../assets/img/portfolio/ranvel.jpg",
        title:"Ranvel Lanka Pvt Ltd",
        details:"ranvellanka.com",
        link:"https://ranvellanka.com/"
      },
      item3:{
        show:"block",
        image:"../assets/img/portfolio/bei-global.jpg",
        title:"Business Excellence Institute",
        details:"bei-global.com",
        link:"https://bei-global.com/"
      },
      item4:{
        show:"none",
        image:"",
        title:"",
        details:"",
        link:""
      }
    },
    // { active:"",
    //   item1:{
    //     image:"../assets/img/portfolio/cees.jpg",
    //     title:"CEES International",
    //     details:"ceesinternational.com"
    //   },
    //   item2:{
    //     image:"../assets/img/portfolio/cees.jpg",
    //     title:"CEES International",
    //     details:"ceesinternational.com"
    //   },
    //   item3:{
    //     image:"../assets/img/portfolio/cees.jpg",
    //     title:"CEES International",
    //     details:"ceesinternational.com"
    //   },
    //   item4:{
    //     image:"../assets/img/portfolio/cees.jpg",
    //     title:"CEES International",
    //     details:"ceesinternational.com"
    //   }
    // }
  ]

  constructor() { }

  ngOnInit() {
  }

}
