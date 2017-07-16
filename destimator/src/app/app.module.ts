import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { ScoreRangeService } from 'app/estimation-logic/score-range.service';

@NgModule({
  declarations: [
    AppComponent,
    EstimationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    EstimationLogicService,
    ScoreRangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
