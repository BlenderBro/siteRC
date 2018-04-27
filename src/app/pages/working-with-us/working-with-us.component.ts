import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-working-with-us',
    templateUrl: './working-with-us.component.html',
    styleUrls: ['./working-with-us.component.css']
})
export class WorkingWithUsComponent implements OnInit {

    pageName = 'Working With Us';
    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    constructor() { }

    ngOnInit() {
    }

}
