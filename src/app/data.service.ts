import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL: string = 'https://dummyproducts-api.herokuapp.com/api/v1/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    const   url: string = this.baseURL + '?apikey=5oIDTjlULgO8';
    return this.http.get(url);
  }

  getProduct(id: string) {
    const   url: string = this.baseURL + `/${id}?apikey=5oIDTjlULgO8`;
    return this.http.get(url)
  }
}
