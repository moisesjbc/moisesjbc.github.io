import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-software-project-detail',
  templateUrl: './software-project-detail.component.html',
  styleUrls: ['./software-project-detail.component.css']
})
export class SoftwareProjectDetailComponent implements OnInit {

  private softwareData: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     console.log('id');
     console.log(id);
     this.http.get('./assets/db/software/' + id + '.json').subscribe(softwareData => {
        this.softwareData = softwareData;
        console.log('softwareData');
        console.log(JSON.stringify(softwareData));
     });
  }

}
