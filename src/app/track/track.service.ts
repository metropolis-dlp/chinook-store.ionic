import { Injectable } from '@angular/core';
import {BaseService} from "../common/base.service";
import {map} from "rxjs";
import {AlbumModel} from "../album/album.model";
import {TrackModel} from "./track.model";

@Injectable({
  providedIn: 'root'
})
export class TrackService extends BaseService {

  query() {
    return this.getData()
      .pipe(map(data => data.tracks.map((track: any) => {
        const minutes = Math.floor(track.length / 60000);
        const seconds = Math.floor(track.length / 1000) - (minutes * 60);
        return {
            id: track.id,
            name: track.name,
            minutes: minutes,
            seconds: seconds
          } as TrackModel;
      })));
  }
}
