import { Injectable } from '@angular/core';
import { EstimationInfo } from 'app/estimation-form/estimation-info.model';
import { EstimationResult } from 'app/estimation-form/estimation-result.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeEstimationLogicService {

    constructor() { }

    estimate(formValues: EstimationInfo): Observable<EstimationResult> {
        return Observable.of();
    }
}