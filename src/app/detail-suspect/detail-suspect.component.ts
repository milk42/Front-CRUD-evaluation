import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { SuspectServiceService } from '../suspect-service.service';
import { ObjetSuspect } from '../objet-suspect';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail-suspect',
  templateUrl: './detail-suspect.component.html',
  styleUrls: ['./detail-suspect.component.css']
})
export class DetailSuspectComponent implements OnInit {

 suspectId: string;
 suspect: ObjetSuspect;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private suspectService: SuspectServiceService,
    private apiService: ApiService) { }

  ngOnInit() {


  console.log('init');

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.suspectId = params.get('id');
      const suspectIdAsInt = parseInt(this.suspectId, 10);

      console.log('suspectId' + this.suspectId);
      this.suspectService
       .getSuspect(suspectIdAsInt)
       .subscribe(
         suspect => (this.suspect = suspect),
      );
    });
    }


    deleteSuspect() {
      this.suspectService.delete(this.suspect.id).subscribe(
        () => {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        },
        err => {
          console.log(err);
        }
      );
    }


  updateSuspect(suspect: ObjetSuspect) {
    this.suspectService.updateSuspect(this.suspect).subscribe(
      () => {
        this.router.navigate(['/suspects'], {
        });
      },
    );
  }


}
