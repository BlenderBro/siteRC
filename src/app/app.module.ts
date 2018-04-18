import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialDesignModule } from './core/material-design.module';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';




@NgModule({
    declarations: [
        AppComponent,
        RoutedComponents,
        NavbarComponent,
        FooterComponent

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialDesignModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
