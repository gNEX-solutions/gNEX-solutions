import { Component, OnInit } from '@angular/core';
import { SolutionsList } from '../models/SolutionsList';

@Component({
  selector: 'app-solutions-component',
  templateUrl: './solutions-component.component.html',
  styleUrls: ['./solutions-component.component.css']
})
export class SolutionsComponentComponent implements OnInit {

  solutionsList:SolutionsList[];
  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit() {
    this.solutionsList = [
      {
        id: 0,
        header: "Web designing and development",
        description: "Sample content",
        status: 0
      },
      {
        id: 1,
        header: "Mobile app development",
        description: "Sample content2",
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
