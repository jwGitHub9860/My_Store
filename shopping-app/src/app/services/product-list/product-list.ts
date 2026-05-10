import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductList {
  constructor(private http: HttpClient) { }

  getItemList() {
    return this.http.get<[]>('../../../assets/data.json');
  }
}
