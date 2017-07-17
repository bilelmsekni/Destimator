import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';

const routes: Routes = [
  { path: '**', component: EstimationFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
