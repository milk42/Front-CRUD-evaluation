import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { NgForm, FormsModule } from '@angular/forms';
import { ObjetAffaire } from './objet-affaire';
import { ObjetSuspect } from './objet-suspect';
import { map, delay, tap } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor( private http: HttpClient) { }


  createSuspect( suspect: ObjetSuspect): Observable<ObjetSuspect> {
    console.log('le create fonctionne de l\'api');
    return this.http.post<ObjetSuspect>(`http://localhost:8080/ajoutSuspect`, suspect);
  }

  getSuspects(): Observable<ObjetSuspect[]> {
    return this.http.get(`http://localhost:8080/suspects`) as Observable<ObjetSuspect[]>;
  }

  getSuspect(id: number): Observable<ObjetSuspect> {
    console.log('id' + id);
    return this.http
      .get<ObjetSuspect>('http://localhost:8080/suspect/' + id)
      .pipe(delay(1000));
  }

  deleteSuspect(id: number): any {
    return this.http.delete<any>('http://localhost:8080/supprimeSuspect/' + id); // .pipe(delay(1000));
  }

}
