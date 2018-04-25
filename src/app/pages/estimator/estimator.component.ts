import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';

@Component({
    selector: 'app-estimator',
    templateUrl: './estimator.component.html',
    styleUrls: ['./estimator.component.css']
})
export class EstimatorComponent implements OnInit {
    isLinear = false;
    firstGroup: FormGroup;
    secondGroup: FormGroup;
    thirdGroup: FormGroup;
    fourthGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.firstGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        })
        this.fourthGroup = this._formBuilder.group({
            fourthCtrl: ['', Validators.required]
        })
    }

}
