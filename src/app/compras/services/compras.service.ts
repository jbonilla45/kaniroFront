import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  url = 'http://localhost:3000/api/compras/';

  constructor(private http: HttpClient) { }

  getCompras(): Observable<any>{
    return this.http.get(this.url);
  }
}
