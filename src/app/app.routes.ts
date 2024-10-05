import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, 
    { path: 'home', component: HeaderComponent}, 
    { path: 'header', component: HeaderComponent }, 
    { path: 'about', component: AboutComponent}, 
];
