import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialComponent } from './partials/social/social.component';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutedComponents = [
    HomeComponent,
    ContactComponent,
    SocialComponent,
]
    
