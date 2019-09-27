import { Component, OnInit } from '@angular/core';
import { SolutionsList } from '../models/SolutionsList';

@Component({
  selector: 'app-solutions-component',
  templateUrl: './solutions-component.component.html',
  styleUrls: ['./solutions-component.component.css']
})
export class SolutionsComponentComponent implements OnInit {

  solutionsList:SolutionsList[];
  constructor() { }

  ngOnInit() {
    this.solutionsList = [
      {
        id: 1,
        header: "Web designing and development",
        description: "Sample content"
      },
      {
        id: 2,
        header: "Mobile app development",
        description: "Sample content2"
      },
    ]
  }

}
