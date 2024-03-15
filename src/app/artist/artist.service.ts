import { Injectable } from '@angular/core';
import {BaseService} from "../common/base.service";
import {map, Observable} from "rxjs";
import {ArtistModel} from "./artist.model";

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends BaseService {
  query(): Observable<ArtistModel[]> {
    return this.getData().pipe(map(data => {
      let albums: any = data.albums;

      return data.artists.map((artist: any) => ({
        id: artist.id,
        name: artist.name,
        albumsCount: albums.filter((a: any) => a.artistId == artist.id).length
      } as ArtistModel));
    }));
  }
}
