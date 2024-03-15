import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected constructor(protected client: HttpClient) { }

  protected getData(): Observable<any> {
    return this.client.get("./assets/data.json");
  }
}
