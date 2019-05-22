import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProjectLoader } from '../../services/project-loader/project-loader.service';

@Component({
  selector: 'app-literature-detail',
  templateUrl: './literature-detail.component.html',
  styleUrls: ['./literature-detail.component.css']
})
export class LiteratureDetailComponent implements OnInit {

    private literatureData : any;

    constructor(private http: HttpClient, private route: ActivatedRoute, private projectLoader: ProjectLoader) {
        const id = this.route.snapshot.paramMap.get('id');
        this.projectLoader.loadProjectData('./assets/db/literature/' + id + '.json').then(literatureData => {
            if (literatureData['src']) {
                this.http.get(literatureData['src'], {responseType: "text"}).subscribe(literatureBody => {
                    literatureData['body'] = literatureBody;
                    this.literatureData = literatureData;
                });
            } else {
                this.literatureData = literatureData;
            }
        });
    }

    ngOnInit() {
    }

}
