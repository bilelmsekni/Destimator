import { Component, OnInit, Input } from '@angular/core';
import { EstimationResult } from 'app/estimation-result/estimation-result.model';

@Component({
    selector: 'app-estimation-result',
    templateUrl: 'estimation-result.component.html'
})

export class EstimationResultComponent implements OnInit {
    @Input() result: EstimationResult;
    constructor() { }

    ngOnInit() { }
}