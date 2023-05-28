import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
export interface URL {
    id: number;
    input_url: string;
    output_url: string;
  }

@Injectable({
  providedIn: 'root'
})
export class Service {
  private apiUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<URL[]> {
    return this.http.get<URL[]>(`${this.apiUrl}/url`);
  }

  getProduct(id: number): Observable<URL> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<URL>(url);
  }

  createProduct(inputText: String): Observable<URL> {
    return this.http.post<URL>(`${this.apiUrl}/url`, inputText);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/product/${id}`;
    return this.http.delete<void>(url);
  }
}