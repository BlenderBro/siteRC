import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    contactForm: FormGroup;
    pageName:string = 'Contact Us';

    constructor(public alert: MatSnackBar, public _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.contactForm = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
    }

    spinn() {
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('submit').classList.add('hidden');

        setTimeout(function () {
            document.getElementById('spinner').classList.add('hidden');
            document.getElementById('submit').classList.remove('hidden');
        }, 3000);
    }

}
