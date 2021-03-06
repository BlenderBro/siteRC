import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutedComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { MaterialDesignModule } from './core/material-design.module';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
// firebase crap
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth.service';
import { IsAuthenticatedService } from './core/is-authenticated.service';
import { DocsHeaderComponent } from './partials/docs-header/docs-header.component';





@NgModule({
    declarations: [
        AppComponent,
        RoutedComponents,
        NavbarComponent,
        FooterComponent,
        DocsHeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialDesignModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
    ],
    providers: [AuthService, IsAuthenticatedService],
    bootstrap: [AppComponent]
})
export class AppModule { }
