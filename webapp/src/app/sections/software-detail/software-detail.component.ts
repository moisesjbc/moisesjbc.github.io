import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { ProjectLoader } from '../../services/project-loader/project-loader.service';

@Component({
  selector: 'app-software-detail',
  templateUrl: './software-detail.component.html',
  styleUrls: ['./software-detail.component.css']
})
export class SoftwareDetailComponent implements OnInit {

  private softwareData: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private projectLoader: ProjectLoader) { }

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     this.projectLoader.loadProjectData('./assets/db/software/' + id + '.json').then(softwareData => {
        this.softwareData = softwareData;
     });
  }

}
