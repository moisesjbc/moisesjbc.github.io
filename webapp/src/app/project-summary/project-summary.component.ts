import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {
  @Input() public projectId : string;
  @Input() public projectsType: string;

  private projectData : any = null;
  private projectHref : string = null;

  constructor(private http : HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('./assets/db/' + this.projectsType + '/' + this.projectId + '.json').subscribe(projectData => {
      this.projectData = projectData;
      this.projectHref = this.projectsType + '/' + this.projectId;
    });
  }
}
