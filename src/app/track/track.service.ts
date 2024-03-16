import { Injectable } from '@angular/core';
import {BaseService} from "../common/base.service";
import {map, Observable} from "rxjs";
import {TrackModel} from "./track.model";

@Injectable({
  providedIn: 'root'
})
export class TrackService extends BaseService {

  query(values: { albumId?: number, search?: string }): Observable<TrackModel[]> {
    return this.getData()
      .pipe(map(data => {
        let result = data.tracks;

        if (values.albumId) {
          result = result.filter((a: any) => a.albumId == values.albumId);
        }
        if (values.search) {
          result = result.filter((a: any) => a.name.includes(values.search));
        }

        return result.map((track: any) => {
          const minutes = Math.floor(track.length / 60000);
          const seconds = Math.floor(track.length / 1000) - (minutes * 60);
          return {
              id: track.id,
              name: track.name,
              minutes: minutes,
              seconds: seconds
            } as TrackModel;
          });
      }));
  }
}
