import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor(public alert: MatSnackBar) { }

    ngOnInit() {
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
