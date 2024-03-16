import { Component, OnInit } from '@angular/core';
import {AlbumModel} from "../album.model";
import {AlbumService} from "../album.service";
import {addIcons} from "ionicons";
import {cartOutline, listOutline} from "ionicons/icons";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {
  IonBackButton, IonButton,
  IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader, IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonButton, IonIcon, RouterLink
  ]
})
export class AlbumListPage implements OnInit {
  artistName?: string;
  albums: AlbumModel[] = [];

  constructor(
      private route: ActivatedRoute,
      private albumService: AlbumService) {
    addIcons({ listOutline, cartOutline });
  }

  ngOnInit() {
    this.route.queryParams.pipe(
      switchMap(params => {
        this.artistName = params['artistName'];

        return this.albumService.query({
          artistId: parseInt(params['artistId']) || undefined
        })
      }),
      tap(albums => this.albums = albums)
    ).subscribe();
  }
}
