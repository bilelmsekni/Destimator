import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { expect } from 'chai';
import { MaterialModule } from '@angular/material';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { ScoreRangeService } from 'app/estimation-logic/score-ranges.service';
import { HttpModule } from '@angular/http';

describe('estimation form', () => {
    let fixture: ComponentFixture<EstimationFormComponent>;
    let comp: EstimationFormComponent;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MaterialModule,
                HttpModule
            ],
            declarations: [
                EstimationFormComponent
            ],
            providers: [
                EstimationLogicService,
                ScoreRangeService
            ]
        });

        fixture = TestBed.createComponent(EstimationFormComponent);
        comp = fixture.componentInstance;
    });

    it('should have cheatingOnPartnerLvl, adrenalineDose, hasSuperHeroFriend as form keys when component initialize', () => {
        comp.ngOnInit();
        expect(Object.keys(comp.estimationForm.value)).to.be.eql(['cheatingOnPartnerLvl', 'adrenalineDose', 'hasSuperHeroFriend']);
    });
});