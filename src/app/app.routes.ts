import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadComponent: () => import('./home/home.page').then( m => m.HomePage) },
  { path: 'artist', loadChildren: () => import('./artist/routes').then(mod => mod.ARTIST_ROUTES) },
  { path: 'album', loadChildren: () => import('./album/routes').then(mod => mod.ALBUM_ROUTES) },
  { path: 'track', loadChildren: () => import('./track/routes').then(mod => mod.TRACK_ROUTES) },
];
