import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../models/Compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  url = 'https://kaniro-api.herokuapp.com/api/compras/';

  constructor(private http: HttpClient) { }

  getCompras(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarCompra(compra: Compra): Observable<any> {
    return this.http.post(this.url, compra);
  }

  eliminarCompra(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  obtenerCompra(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarCompra(id: string, compra: Compra): Observable<any> {
    return this.http.put(this.url + id, compra);
  }
}
