import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/Venta';

@Injectable({
  providedIn: 'root'
})

export class VentasService {

  URL = 'http://localhost:3000/api/ventas/'

  constructor(private http: HttpClient) { }

  getVentas(): Observable<any> {
    return this.http.get(this.URL)
  }

  getVenta(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  guardarVenta(venta: Venta): Observable<any> {
    if (venta._idVenta == null) {
      return this.http.post(this.URL, venta);
    }
    else {
      return this.http.put(this.URL + venta._idVenta, venta);
    }
  }

  eliminarVenta(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
