import { Injectable } from '@angular/core';

// TEMP: use "Observable" or Not?
// Allows Requests to be Made
import { HttpClient } from "@angular/common/http";

// TEMP: use "Observable" or Not?
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root',
})
export class ProductItemService {
  chosenItemId: number;

  // TEMP: use "Observable" or Not?
  constructor(private http: HttpClient) { this.chosenItemId = 0; }

  // TEMP: use "Observable" or Not?
  setChosenItemId(id: number): void { this.chosenItemId = id; }

  // TEMP: use "Observable" or Not?
  getChosenItemId(): number { return this.chosenItemId; }
  
  // TEMP: Get AND Set item Purchase Amount HERE
}
