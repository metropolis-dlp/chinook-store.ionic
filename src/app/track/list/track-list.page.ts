import {Component, OnInit} from "@angular/core";
import {addIcons} from "ionicons";
import {cartOutline} from "ionicons/icons";
import {TrackService} from "../track.service";
import {TrackModel} from "../track.model";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonItem, IonLabel,
  IonList, IonMenuButton, IonNote,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {switchMap, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.page.html',
  styleUrls: ['./track-list.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNote, IonMenuButton]
})
export class TrackListPage implements OnInit {
  albumName?: string;
  tracks: TrackModel[] = [];

  constructor(
      private route: ActivatedRoute,
      private trackService: TrackService) {
    addIcons({ cartOutline });
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap(params => {
        this.albumName = params['albumName'];

        return this.trackService.query({
          albumId: parseInt(params['albumId']) || undefined
        })
      }),
      tap(tracks => this.tracks = tracks)
    ).subscribe();
  }

}
