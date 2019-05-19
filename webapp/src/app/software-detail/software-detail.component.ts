import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-software-detail',
  templateUrl: './software-detail.component.html',
  styleUrls: ['./software-detail.component.css']
})
export class SoftwareDetailComponent implements OnInit {

  private softwareData: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
     const id = this.route.snapshot.paramMap.get('id');
     this.http.get('./assets/db/software/' + id + '.json').subscribe(softwareData => {
        this.softwareData = softwareData;
     });
  }

}
