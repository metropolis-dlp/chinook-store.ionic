import {
  IonAvatar,
  IonBackButton, IonButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList,
  IonMenuButton, IonNote,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {Component, OnInit} from "@angular/core";
import {addIcons} from "ionicons";
import {cartOutline} from "ionicons/icons";
import {TrackService} from "../track.service";
import {TrackModel} from "../track.model";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.page.html',
  styleUrls: ['./track-list.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonButtons, IonMenuButton, IonHeader, IonTitle, IonContent, IonToolbar, IonList,
    IonItem, IonLabel, IonBackButton, IonNote, IonItemOptions, IonIcon, IonItemOption, IonButton, IonItemSliding, IonAvatar]
})
export class TrackListPage implements OnInit {
  tracks: TrackModel[] = [];

  constructor(private trackService: TrackService) {
    addIcons({ cartOutline });
  }

  ngOnInit() {
    this.trackService.query().subscribe(tracks => this.tracks = tracks);
  }

}
