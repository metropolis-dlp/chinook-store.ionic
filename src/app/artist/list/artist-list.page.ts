import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ArtistModel} from "../artist.model";
import {ArtistService} from "../artist.service";
import {addIcons} from "ionicons";
import {chevronForwardOutline} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.page.html',
  styleUrls: ['./artist-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ArtistListPage implements OnInit {
  artists: ArtistModel[] = [];

  constructor(private artistService: ArtistService) {
    addIcons({ chevronForwardOutline })
  }

  ngOnInit() {
    this.artistService.query().subscribe(artists => this.artists = artists);
  }

}
