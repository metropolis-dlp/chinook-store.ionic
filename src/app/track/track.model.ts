import {SimpleItemModel} from "../common/simple-item.model";

export interface TrackModel extends SimpleItemModel {
  minutes: number;
  seconds: number;
}
