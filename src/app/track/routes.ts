import {Route} from "@angular/router";
import {TrackListPage} from "./list/track-list.page";

export const TRACK_ROUTES: Route[] = [
  { path: 'list', component: TrackListPage },
  { path: '',   redirectTo: 'list', pathMatch: 'full' }
];
