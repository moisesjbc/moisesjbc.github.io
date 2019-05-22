import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProjectLoader } from '../../services/project-loader/project-loader.service';


@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.css']
})
export class BreadcumbComponent implements OnInit {

  public routeFragments : any[];
  public locale : any;

  constructor(private router: Router, private http: HttpClient, private projectLoader: ProjectLoader) { }

  ngOnInit() {
      this.http.get('./assets/db/locale/es_ES.json').subscribe(locale => {
          this.projectLoader.listenProjectSummary().subscribe((projectData : string) => {
              this.generateRouteFragments(locale, projectData['title']);
          });
          this.locale = locale;
          this.generateRouteFragments(locale);
          this.router.events.subscribe((event: any) => {
              if(event instanceof NavigationEnd) {
                  this.generateRouteFragments(locale);
              }
          });
      });
  }

  generateRouteFragments(locale: any, projectName: string = null) {
      var routerTokens : any[] = this.router.url.split('/').filter(el => el);
      routerTokens = routerTokens.map(function(token, index, tokens) {
         return {
            text: locale[token] || token,
            url: '/' + tokens.slice(0, index+1).join('/')
        };
      });
      if (projectName) {
          routerTokens[routerTokens.length - 1].text = projectName;
      }

      this.routeFragments = routerTokens;
  }

}
