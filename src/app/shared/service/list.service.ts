import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../model/pokemon";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(
    private _http: HttpClient
  ) { }

  public loadList() {
    return this._http.get<Pokemon[]>('assets/shared/json/pokedex.json')
  }
  public loadDetailList(id:number) {
    return this._http.get<Pokemon[]>('assets/shared/json/pokedex.json').pipe(
      map(x => x.find(item => item.id === id))
    )
  }
}

