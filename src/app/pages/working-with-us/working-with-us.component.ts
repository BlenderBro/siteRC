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
    info(){
        let info = document.getElementsByClassName('information');
        info[0].scrollIntoView({block: 'start',  behavior: 'smooth'});        
    }
    planning(){
        let planning = document.getElementsByClassName('planning');
        planning[0].scrollIntoView({block: 'start',  behavior: 'smooth'});        
    }
    design(){
        let design = document.getElementsByClassName('design');
        design[0].scrollIntoView({block: 'start',  behavior: 'smooth'});        
    }
    tooling(){
        let tooling = document.getElementsByClassName('tooling');
        tooling[0].scrollIntoView({block: 'start',  behavior: 'smooth'});        
    }

    constructor() { }

    ngOnInit() {
    }

}
