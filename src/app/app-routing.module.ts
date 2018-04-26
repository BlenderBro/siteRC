import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SocialComponent } from './partials/social/social.component'
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './partials/login/login.component';
import { EstimatorComponent } from './pages/estimator/estimator.component';

// Services
import { IsAuthenticatedService } from './core/is-authenticated.service';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'lemein', component: LoginComponent },
    { path: 'cost-estimation', component: EstimatorComponent },
    { path: 'add-post', component: AddPostComponent, canActivate: [IsAuthenticatedService] },
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
    LoginComponent,
    EstimatorComponent,
    AddPostComponent,

]

