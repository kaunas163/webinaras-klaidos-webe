import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'paslaugos', component: ServicesPageComponent },
    { path: 'kontaktai', component: ContactsPageComponent },
    { path: '**', component: NotFoundPageComponent },
];
