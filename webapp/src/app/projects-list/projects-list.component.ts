import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public projectIds: any[];
  @Input() public projectsType: string;
  public rows : any[];

  constructor() {
    
  }

  ngOnInit() {
    var i = 0;
    console.log(this);
    this.rows = [];
    while (i < this.projectIds.length) {
        var j = 0;
        var row: string[] = []; 
        console.log(j);
        while (i < this.projectIds.length && j < 4) {
            row.push(this.projectIds[i]);
            i++;
            j++;
        }
        console.log(this);
        this.rows.push(row);
    }
  }

}
