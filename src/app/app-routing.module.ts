import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { SocialComponent } from './partials/social/social.component'
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { LoginComponent } from './partials/login/login.component';
import { EstimatorComponent } from './pages/estimator/estimator.component';
import { AddPostComponent } from './pages/blog/add-post/add-post.component';
import { WorkingWithUsComponent } from './pages/working-with-us/working-with-us.component';
import { DevelopmentComponent } from './pages/development/development.component';
import { MarketingServicesComponent } from './pages/marketing-services/marketing-services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { SinglePostComponent } from './pages/blog/single-post/single-post.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

// Services
import { IsAuthenticatedService } from './core/is-authenticated.service';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'working-with-us', component: WorkingWithUsComponent },
    { path: 'development', component: DevelopmentComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'marketing-services', component: MarketingServicesComponent },
    // { path: 'lemein', component: LoginComponent },
    { path: 'cost-estimation', component: EstimatorComponent },
    { path: 'add-post', component: AddPostComponent, canActivate: [IsAuthenticatedService] },
    { path: 'view-post', component: SinglePostComponent },

    //handle 404 errors
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' },
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
    // LoginComponent,
    EstimatorComponent,
    AddPostComponent,
    WorkingWithUsComponent,
    DevelopmentComponent,
    MarketingServicesComponent,
    AboutUsComponent,
    SinglePostComponent,
    ServicesComponent,
    NotFoundComponent,

]

