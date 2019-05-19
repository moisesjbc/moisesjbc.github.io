import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {
  private softwareIds: string[] = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/db/software/index.json').subscribe(softwareData => {
      this.softwareIds = softwareData['software'];
    });
  }

}
