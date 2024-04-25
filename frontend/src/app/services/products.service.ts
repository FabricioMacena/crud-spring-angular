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
    return this.http.get<ProductInterface[]>(`${this.url}/products/`);
  }

  addProduct(product: ProductInterface): Observable<ProductInterface>{
    const {id, ...newProduct} = product;
    return this.http.post<ProductInterface>(`${this.url}/products/`, newProduct);
  }

  updateProduct(id: UUID, product: ProductInterface): Observable<ProductInterface>{
    return this.http.put<ProductInterface>(`${this.url}/products/${id}`, product);
  }

  deleteProduct(id: UUID): Observable<void>{
    return this.http.delete<void>(`${this.url}/products/${id}`);
  }

  getCategories(): Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/products/categories`);
  }
}
