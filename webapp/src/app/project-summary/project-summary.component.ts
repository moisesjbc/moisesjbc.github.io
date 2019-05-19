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
  @Input() public headersLevel: number = 2;

  private projectData : any = null;
  private projectHref : string = null;

  constructor(private http : HttpClient) {
    
  }

  ngOnInit() {
    console.log('Loading');
    console.log(this.projectId);
    console.log('./assets/db/' + this.projectsType + '/' + this.projectId + '.json');
    this.http.get('./assets/db/' + this.projectsType + '/' + this.projectId + '.json').subscribe(projectData => {
      console.log('projectData');
      console.log(projectData);
      this.projectData = projectData;
      this.projectHref = this.projectsType + '/' + this.projectId;
    });
  }
}
