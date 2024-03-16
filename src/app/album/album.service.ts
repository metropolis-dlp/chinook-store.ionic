import { Injectable } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {AlbumModel} from "./album.model";
import {BaseService} from "../common/base.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseService {
  query(values: { artistId?: number, search?: string }): Observable<AlbumModel[]> {
    return this.getData()
      .pipe(map(data => {
        const artists = data.artists;

        let result = data.albums;
        if (values.artistId) {
          result = result.filter((a: any) => a.artistId == values.artistId);
        }
        if (values.search) {
          result = result.filter((a: any) => a.name.includes(values.search));
        }

        result = result.map((album: any) => ({
          id: album.id,
          name: album.name,
          artistName: artists.find((a: any) => a.id == album.artistId).name
        } as AlbumModel));


        return result;
      }));
  }
}
