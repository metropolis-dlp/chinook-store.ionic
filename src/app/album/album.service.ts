import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {AlbumModel} from "./album.model";
import {BaseService} from "../common/base.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService {
  query(): Observable<AlbumModel[]> {
    return this.getData()
      .pipe(map(data => {
        let artists = data.artists;

        return data.albums.map((album: any) => ({
            id: album.id,
            name: album.name,
            artistName: artists.find((a: any) => a.id == album.artistId).name
          } as AlbumModel)
        );
      }));
  }
}
