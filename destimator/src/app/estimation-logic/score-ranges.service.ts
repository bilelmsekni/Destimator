import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ScoreRange } from 'app/estimation-logic/score-range.model';

@Injectable()
export class ScoreRangeService {
    constructor(private http: Http) { }

    getRange(score: number): Observable<ScoreRange> {
        return this.getRanges()
            .map(res => res.filter(r => score >= r.maxScore))
            .map(res => res[res.length - 1]);
    }

    private getRanges(): Observable<ScoreRange[]> {
        return this.http.get('../../api/score.range.json')
            .map(res => res.json().ranges as ScoreRange[]);
    }
}