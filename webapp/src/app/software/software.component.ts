import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {
  private softwareIds: string[] = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/db/software/index.json').subscribe(softwareData => {
      this.softwareIds = softwareData['software'];
    });
  }

}
