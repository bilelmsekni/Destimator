import { Injectable } from '@angular/core';
import { EstimationInfo } from 'app/estimation-form/estimation-info.model';
import { EstimationResult } from 'app/estimation-result/estimation-result.model';
import { ScoreRangeService } from 'app/estimation-logic/score-ranges.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstimationLogicService {

    constructor(private scoreRangeService: ScoreRangeService) { }

    estimate(formValues: EstimationInfo): Observable<EstimationResult> {
        const score = this.calculateScore(formValues);
        return this.scoreRangeService
            .getRange(score)
            .map(range => <EstimationResult>{
                value: score,
                message: range.message,
                imageUrl: range.imageUrl
            });
    }

    calculateScore(formValues: EstimationInfo): number {
        return (+formValues.cheatingOnPartnerLvl * formValues.adrenalineDose)
            - (formValues.hasSuperHeroFriend ? 100 : 0);
    }
}