import {AlbumListPage} from "./list/album-list.page";
import {Route} from "@angular/router";

export const ALBUM_ROUTES: Route[] = [
  { path: 'list', component: AlbumListPage },
  { path: '',   redirectTo: 'list', pathMatch: 'full' }
];
