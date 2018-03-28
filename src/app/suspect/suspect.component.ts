import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { ApiService } from '../api.service';
import { ObjetSuspect } from '../objet-suspect';



@Component({
  selector: 'app-suspect',
  templateUrl: './suspect.component.html',
  styleUrls: ['./suspect.component.css']
})
export class SuspectComponent implements OnInit {

  // suspects = [
  //   {
  //     id: 1,
  //     pseudo: 'Le détracteur des champs',
  //     photo: './../assets/image/suricat.PNG',
  //     ajoute_le: new Date('1/1/16'),
  //     signeParticulier: 'Tatouage sur la main gauche',
  //     couleurPeau: 'blanc aspirine',
  //     couleurCheveux: 'brun',
  //     taille: '0m78',
  //   },
  //   {
  //     id: 2,
  //     pseudo: 'Pacha de la playa',
  //     photo: './../assets/image/chat.PNG',
  //     ajoute_le: new Date('1/1/16'),
  //     signeParticulier: 'Tatouage sur la main gauche',
  //     couleurPeau: 'blanc aspirine',
  //     couleurCheveux: 'brun',
  //     taille: '0m90'
  //   },
  //   {
  //     id: 3,
  //     pseudo: 'Espion invisible',
  //     photo: './../assets/image/hiboux.PNG',
  //     ajoute_le: new Date('1/1/16'),
  //     signeParticulier: 'Tatouage sur la main gauche',
  //     couleurPeau: 'blanc aspirine',
  //     couleurCheveux: 'brun',
  //     taille: '0m56',
  //   },
  //   {
  //     id: 4,
  //     pseudo: 'Le King',
  //     photo: './../assets/image/lion.PNG',
  //     ajoute_le: new Date('1/1/16'),
  //     signeParticulier: 'Tatouage sur la main gauche',
  //     couleurPeau: 'blanc aspirine',
  //     couleurCheveux: 'brun',
  //     taille: '1m02',
  //   }
  // ];


  suspects = new Array<ObjetSuspect>();
  suspect: ObjetSuspect;

  constructor( public apiService: ApiService, private route: ActivatedRoute, private router: Router) { }


  afficherId() {
    this.router.navigate(['/suspect', this.suspect.id]);
  }



  ngOnInit() {
    this.apiService.getSuspects().subscribe( (data: ObjetSuspect[]) => {
      this.suspects = data;
    });
  }

}
