import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { SuspectComponent } from '../suspect/suspect.component';
import { SuspectServiceService } from '../suspect-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ObjetAffaire } from '../objet-affaire';
import { ObjetSuspect } from '../objet-suspect';





@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {


  affaire: ObjetAffaire;
  suspect = new ObjetSuspect();
  editing: boolean;



  constructor (
    private suspectService: SuspectServiceService,
    private apiService: ApiService ,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
     // const lastFragment = this.route.snapshot.url[this.route.snapshot.url.length - 1];
     // Récupère le dernier élément du tableau de chemin URL
     // this.editing=false;
    }


// Pour le lier à l'affaire
//  onSubmit(suspect: ObjetSuspect): void {
//     this.affaire.suspects.push(this.suspect);
//      this.apiService.updateAffaire(this.affaire).subscribe();
//   }
onSubmit(spt: NgForm) {
  console.log('c\'est ici que ça va pas' + this.suspect.pseudo);
  this.suspectService.create(this.suspect)
  .subscribe( () => {
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  } ); }

}
