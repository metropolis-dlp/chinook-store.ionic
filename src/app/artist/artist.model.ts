import {SimpleItemModel} from "../common/simple-item.model";

export interface ArtistModel extends SimpleItemModel {
  albumsCount: number;
}
