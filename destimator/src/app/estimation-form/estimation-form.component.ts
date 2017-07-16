import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
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
    isValidEmail = true;

    constructor(private fb: FormBuilder, private estimationLogic: EstimationLogicService) { }

    ngOnInit() {
        this.estimationForm = this.fb.group(
            {
                'cheatingOnPartnerLvl': ['', Validators.required],
                'adrenalineDose': ['', Validators.required],
                'hasSuperHeroFriend': [false, Validators.required],
                'email': ['', [Validators.email, Validators.required]]
            }
        );
        this.estimationForm.controls['email'].valueChanges
            .debounceTime(500)
            .subscribe(res => this.isValidEmail = this.estimationForm.controls['email'].valid);
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

    public hasError(controlName: string, errorType: string): boolean {
        return this.estimationForm.controls[controlName].hasError(errorType);
    }
}