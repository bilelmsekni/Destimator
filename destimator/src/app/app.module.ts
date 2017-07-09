import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { EstimationResultComponent } from 'app/estimation-result/estimation-result.component';

@NgModule({
  declarations: [
    AppComponent,
    EstimationFormComponent,
    EstimationResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [EstimationLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
