import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { ApiService} from './api.service';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { NgForm, FormsModule } from '@angular/forms';
import { ObjetSuspect } from './objet-suspect';
import { HttpHeaders } from '@angular/common/http';


const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable()
export class SuspectServiceService {

  selectedSuspect: ObjetSuspect;

  constructor(private api: ApiService, private http: HttpClient)  { }


  create(suspect: ObjetSuspect): Observable<ObjetSuspect> {
    console.log('le create fonctionne');
    return this.api.createSuspect(suspect);
  }


  getSuspect(id: number): Observable<ObjetSuspect> {
    console.log('le get fonctionne');
    return this.api.getSuspect(id);
  }

  updateSuspect(suspect: ObjetSuspect): Observable<ObjetSuspect> {

    return this.http.put<ObjetSuspect>('http://localhost:8080/editSuspect/' +
    suspect.id, suspect, httpOptions) as Observable<ObjetSuspect>;

  }

  delete(id: number): Observable<any> {
    return this.api.deleteSuspect(id);
  }




}
