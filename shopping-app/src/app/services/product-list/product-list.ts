import { Injectable } from '@angular/core';

// Allows Requests to be Made
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  // TEMP: keep or Use Attempt 1?
  // Ensures "jsonUrl" Will NOT CHANGE
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getItemList(): Observable<Item[]> {
    // TEMP: Attempt 1
    //return this.http.get<Item[]>('assets/data.json');

    // TEMP: Attempt 2
    return this.http.get<Item[]>(this.jsonUrl);
  }
}
