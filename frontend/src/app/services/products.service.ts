import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product-interface';
import { UUID } from 'node:crypto';

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

  deleteProduct(id: UUID): Observable<UUID>{
    return this.http.delete<UUID>(`${this.url}/products/${id}`);
  }
}
