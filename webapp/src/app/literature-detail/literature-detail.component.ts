import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-literature-detail',
  templateUrl: './literature-detail.component.html',
  styleUrls: ['./literature-detail.component.css']
})
export class LiteratureDetailComponent implements OnInit {

    private literatureData : any;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        console.log('id');
        console.log(id);
        this.http.get('./assets/db/literature/' + id + '.json').subscribe(literatureData => {
            this.literatureData = literatureData;
            console.log('literatureData');
            console.log(JSON.stringify(literatureData));
        });
    }

    ngOnInit() {
    }

}
