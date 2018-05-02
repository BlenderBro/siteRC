import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-estimator',
    templateUrl: './estimator.component.html',
    styleUrls: ['./estimator.component.css']
})
export class EstimatorComponent implements OnInit {
    isLinear = false;
    firstGroup: FormControl = new FormControl();
    secondGroup: FormGroup;
    thirdGroup: FormGroup;
    fourthGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit() {
        // this.firstGroup = this._formBuilder.group({
        //     firstCtrl: ['', Validators.required]
        // });
        this.firstGroup.statusChanges.subscribe(e => {
            console.log(e);
        })

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

    totalCost() {
        /* 
        *   Get values from checked checkboxes;
        *   Convert string values to int;
        *   Sum up values inside resulting array
        *   @return sum:int
        */ 

        let values = [];
        let all = document.querySelectorAll('input[type="checkbox"]:checked');
        for (let i = 0; i < all.length; i++) {
            values.push(parseInt(all[i].value);
        }
        //sum it up
        let sum = values.reduce( function(a,b){return a+b;}, 0);
        document.getElementById('total').innerHTML = sum;


    }
}
