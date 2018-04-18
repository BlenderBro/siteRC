// Imports and stores all angular-material UI components

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material UI imports
import { MatToolbarModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        MatCardModule,
        MatExpansionModule,
        MatStepperModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTabsModule,
        MatCardModule,
        MatExpansionModule,
        MatStepperModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    declarations: []
})
export class MaterialDesignModule { }
