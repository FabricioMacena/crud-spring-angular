import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UUID } from 'node:crypto';
import { ProductInterface } from '../interfaces/product-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(`${this.url}/products/`)
  }

  addProduct(product: ProductInterface): Observable<ProductInterface>{
    return this.http.post<ProductInterface>(`${this.url}/products/`, product);
  }

  updateProduct(id: UUID, product: ProductInterface): Observable<ProductInterface>{
    return this.http.patch<ProductInterface>(`${this.url}/product/${id}`, product);
  }

  deleteProduct(id: UUID): Observable<UUID>{
    return this.http.delete<UUID>(`${this.url}/products/${id}`);
  }
}
