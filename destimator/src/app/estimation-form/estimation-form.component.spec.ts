import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { expect } from 'chai';
import { MaterialModule } from '@angular/material';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { ScoreRangeService } from 'app/estimation-logic/score-range.service';
import { createStubInstance, spy } from 'sinon';
import { FakeEstimationLogicService } from 'fake/estimation-logic.service.fake';

describe('estimation form', () => {
    let fixture: ComponentFixture<EstimationFormComponent>;
    let comp: EstimationFormComponent;
    let estimationLogicServiceStub: EstimationLogicService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MaterialModule
            ],
            declarations: [
                EstimationFormComponent
            ],
            providers: [
                { provide: EstimationLogicService, useClass: FakeEstimationLogicService },
                { provide: ScoreRangeService, useValue: createStubInstance(ScoreRangeService) }
            ]
        });

        fixture = TestBed.createComponent(EstimationFormComponent);
        comp = fixture.componentInstance;
        estimationLogicServiceStub = TestBed.get(EstimationLogicService);
    });

    it('should have cheatingOnPartnerLvl, adrenalineDose, hasSuperHeroFriend as form keys when component initialize', () => {
        comp.ngOnInit();
        expect(Object.keys(comp.estimationForm.value)).to.be.eql(['cheatingOnPartnerLvl', 'adrenalineDose', 'hasSuperHeroFriend']);
    });

    it('should call estimationLogicService when form is valid and submit executed', () => {
        comp.ngOnInit();
        const estimationLogicSpy = spy(estimationLogicServiceStub, 'estimate');
        comp.estimationForm.setValue({
            'cheatingOnPartnerLvl': 1,
            'adrenalineDose': 50,
            'hasSuperHeroFriend': false
        });
        comp.submitForm();
        expect(estimationLogicSpy.called).to.be.true;
    });
});