import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, RouterLink]
})
export class AlbumListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
