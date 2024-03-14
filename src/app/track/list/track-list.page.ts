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
import {cloudDownload} from "ionicons/icons";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.page.html',
  styleUrls: ['./track-list.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonButtons, IonMenuButton, IonHeader, IonTitle, IonContent, IonToolbar, IonList,
    IonItem, IonLabel, IonBackButton, IonNote, IonItemOptions, IonIcon, IonItemOption, IonButton, IonItemSliding, IonAvatar]
})
export class TrackListPage implements OnInit {
  constructor() {
    addIcons({ cloudDownload });
  }

  ngOnInit() {
  }

}
