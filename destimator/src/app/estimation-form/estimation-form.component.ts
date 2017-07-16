import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstimationLogicService } from 'app/estimation-logic/estimation-logic.service';
import { EstimationResult } from 'app/estimation-form/estimation-result.model';

@Component({
    selector: 'app-estimation-form',
    templateUrl: 'estimation-form.component.html'
})

export class EstimationFormComponent implements OnInit {
    estimationForm: FormGroup;
    estimationResult: EstimationResult = null;
    isSubmitted = false;
    constructor(private fb: FormBuilder, private estimationLogic: EstimationLogicService) { }

    ngOnInit() {
        this.estimationForm = this.fb.group(
            {
                'cheatingOnPartnerLvl': ['', Validators.required],
                'adrenalineDose': ['', Validators.required],
                'hasSuperHeroFriend': [false, Validators.required]
            }
        );
    }

    public submitForm(): void {
        this.isSubmitted = true;
        if (this.estimationForm.valid) {
            this.estimationLogic.estimate(this.estimationForm.value)
                .subscribe(res => this.estimationResult = res);
        }
    }

    public resetForm(): void {
        this.estimationForm.controls['adrenalineDose'].setValue(0);
        this.estimationForm.reset();
        this.estimationForm.markAsPristine();
    }

    public isTipHidden(criteriaName: string): boolean {
        return this.estimationForm.controls[criteriaName].pristine
            && !this.isSubmitted;
    }

    public isCriteriaValid(criteriaName: string): boolean {
        return this.estimationForm.controls[criteriaName].dirty &&
            this.estimationForm.controls[criteriaName].valid;
    }
}