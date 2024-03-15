import {Route} from "@angular/router";
import {ArtistListPage} from "./list/artist-list.page";

export const ARTIST_ROUTES: Route[] = [
  { path: 'list', component: ArtistListPage },
  { path: '',   redirectTo: 'list', pathMatch: 'full' }
];
