import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL = 'https://kaniro-api.herokuapp.com/api/productos/'

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(this.URL)
  }

  getProducto(id: string): Observable<any> {
    return this.http.get(this.URL + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    if (producto._id == null) {
      return this.http.post(this.URL, producto);
    }
    else {
      return this.http.put(this.URL + producto._id, producto);
    }
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
}
