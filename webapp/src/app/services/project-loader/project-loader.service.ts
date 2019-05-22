import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectLoader {
    constructor(private http : HttpClient) { }

    private observers: any[] = [];

    public listenProjectSummary() {
       return new Observable(observer => {
           this.observers.push(observer);
           return {unsubscribe() {}};
       });
    }

    public notifyProjectSummaryChanged(projectSummary) {
        for (let observer of this.observers) {
            observer.next(projectSummary);
        }
    }

    public loadProjectData(url: string) {
        return this.http.get(url).toPromise().then(projectData => {
            this.notifyProjectSummaryChanged(projectData);
            return projectData;
        });
    }
}
