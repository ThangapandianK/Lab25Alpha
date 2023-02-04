import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartitemService {

  constructor(private http: HttpClient) { }

  GetDetails(): Observable<any> {
    return this.http.get<any>('https://bookcart.azurewebsites.net/api/shoppingcart/1966');
  }

  IncrementQty(inp: any): Observable<any> {
    return this.http.post<any>('https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/1966/' + inp ,{});
  }

  DecrementQty(inp: any): Observable<any> {
    return this.http.put<any>('https://bookcart.azurewebsites.net/api/shoppingcart/1966/' + inp, {});
  }
  DeleteItem(inp: any): Observable<any> {
    return this.http.delete<any>('https://bookcart.azurewebsites.net/api/shoppingcart/1966/' + inp, {});
  }
  DeleteAllItem(): Observable<any> {
    return this.http.delete<any>('https://bookcart.azurewebsites.net/api/shoppingcart/1966', {});
  }

}
