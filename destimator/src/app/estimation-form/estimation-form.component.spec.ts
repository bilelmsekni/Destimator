import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { EstimationFormComponent } from 'app/estimation-form/estimation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { expect } from 'chai';
import { MaterialModule } from '@angular/material';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { ScoreRangeService } from 'app/estimation-logic/score-range.service';
import { createStubInstance, spy } from 'sinon';
import { FakeEstimationLogicService } from 'fake/estimation-logic.service.fake';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('estimation form', () => {
    let fixture: ComponentFixture<EstimationFormComponent>;
    let comp: EstimationFormComponent;
    let estimationLogicServiceStub: EstimationLogicService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                MaterialModule,
                BrowserAnimationsModule
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
        expect(Object.keys(comp.estimationForm.value)).to.be.eql(['cheatingOnPartnerLvl', 'adrenalineDose', 'hasSuperHeroFriend', 'email']);
    });

    it('should call estimationLogicService when form is valid and submit executed', () => {
        comp.ngOnInit();
        const estimationLogicSpy = spy(estimationLogicServiceStub, 'estimate');
        comp.estimationForm.setValue({
            'cheatingOnPartnerLvl': 1,
            'adrenalineDose': 50,
            'hasSuperHeroFriend': false,
            'email': 'tuto@ng.io'
        });
        comp.submitForm();
        expect(estimationLogicSpy.called).to.be.true;
    });

    it('should display error message when email is not valid using fakeAsync', fakeAsync(() => {
        comp.ngOnInit();
        comp.estimationForm.setValue({
            cheatingOnPartnerLvl: 2,
            adrenalineDose: 29,
            hasSuperHeroFriend: false,
            email: 'bad_email_format'
        });
        tick(500);
        expect(comp.isValidEmail).to.be.false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.alert.alert-danger'))
            .nativeElement.innerText).to.be.eql('Please enter a valid email address');
    }));

    it('should display error message when email is not valid using async', async(() => {
        comp.ngOnInit();
        fixture.whenStable().then(() => {
            expect(comp.isValidEmail).to.be.false;
            fixture.detectChanges();
            expect(fixture.debugElement.query(By.css('.alert.alert-danger'))
                .nativeElement.innerText).to.be.eql('Please enter a valid email address');
        });
        comp.estimationForm.setValue({
            cheatingOnPartnerLvl: 2,
            adrenalineDose: 29,
            hasSuperHeroFriend: false,
            email: 'bad_email_format'
        });
    }));

    it('should display error message when email is not valid using done', (done) => {
        comp.ngOnInit();
        comp.estimationForm.setValue({
            cheatingOnPartnerLvl: 2,
            adrenalineDose: 29,
            hasSuperHeroFriend: false,
            email: 'bad_email_format'
        });
        fixture.whenStable().then(() => {
            expect(comp.isValidEmail).to.be.false;
            fixture.detectChanges();
            expect(fixture.debugElement.query(By.css('.alert.alert-danger'))
                .nativeElement.innerText).to.be.eql('Please enter a valid email address');
        });
        done();
    });
});