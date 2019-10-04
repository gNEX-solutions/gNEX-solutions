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
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: 0
      },
      {
        id: 1,
        header: "Mobile app development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: 0
      },
      {
        id: 2,
        header: "Graphic designing",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        status: 0
      },
      {
        id: 3,
        header: "Branding",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
