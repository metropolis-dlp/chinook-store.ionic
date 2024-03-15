import { Component, OnInit } from '@angular/core';
import {AlbumModel} from "../album.model";
import {AlbumService} from "../album.service";
import {addIcons} from "ionicons";
import {cartOutline, listOutline} from "ionicons/icons";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.page.html',
  styleUrls: ['./album-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AlbumListPage implements OnInit {
  albums: AlbumModel[] = [];

  constructor(private albumService: AlbumService) {
    addIcons({ listOutline, cartOutline });
  }

  ngOnInit() {
    this.albumService.query().subscribe(albums => this.albums = albums);
  }
}
