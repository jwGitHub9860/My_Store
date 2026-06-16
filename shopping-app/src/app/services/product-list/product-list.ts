import { Injectable } from '@angular/core';

// Allows Requests to be Made
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private http: HttpClient) { }

  getItemList(): Observable<Item[]> { return this.http.get<Item[]>('assets/data.json'); }
}
