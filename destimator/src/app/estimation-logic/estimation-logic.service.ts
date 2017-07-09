import { Injectable } from '@angular/core';
import { EstimationInfo } from 'app/estimation-form/estimation-info.model';
import { EstimationResult } from 'app/estimation-result/estimation-result.model';

@Injectable()
export class EstimationLogicService {

    constructor() { }

    estimate(formValue: EstimationInfo): EstimationResult {
        return {
            value: 100,
            message: 'wow another Gandalf !'
        };
    }
}