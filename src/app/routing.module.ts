import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuspectComponent } from './suspect/suspect.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RouterModule, Routes } from '@angular/router';
import { SuspectServiceService } from './suspect-service.service';
import { DetailSuspectComponent } from './detail-suspect/detail-suspect.component';






const routes: Routes = [
  {path: '', redirectTo: '/suspects', pathMatch: 'full' },
  {path: 'suspects', component: SuspectComponent},
  {path: 'ajoutSuspect', component: FormulaireComponent},
  {path: 'suspect/:id', component: DetailSuspectComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  declarations: []
})
export class RoutingModule { }
