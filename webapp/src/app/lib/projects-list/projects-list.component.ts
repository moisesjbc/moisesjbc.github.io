import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public projectIds: any[];
  @Input() public projectsType: string;
  @Input() public headersLevel: number = 2;
  public rows : any[];

  constructor() {
    
  }

  ngOnInit() {
    var i = 0;
    this.rows = [];
    while (i < this.projectIds.length) {
        var j = 0;
        var row: string[] = []; 
        while (i < this.projectIds.length && j < 4) {
            row.push(this.projectIds[i]);
            i++;
            j++;
        }
        this.rows.push(row);
    }
  }

}
