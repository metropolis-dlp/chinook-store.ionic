import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'album', loadChildren: () => import('./album/routes').then(mod => mod.ALBUM_ROUTES) },
  { path: 'track', loadChildren: () => import('./track/routes').then(mod => mod.TRACK_ROUTES) },
  { path: 'home', loadComponent: () => import('./home/home.page').then( m => m.HomePage) }
];
