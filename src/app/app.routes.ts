import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
      { path: '', component: HomeComponent },
    {
        path:'single-responsibility',
        loadComponent:() => import('./solid-principles/single-responsibility/transfer.component').then(c => c.TransferComponent),
    },
    // {
    //     path:'open-closed',
    //     loadComponent:() => import('./solid-principles/open-closed/notification.component').then(c => c.notification)
    // }
];
