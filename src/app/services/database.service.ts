import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = 'http://petstore-demo-endpoint.execute-api.com/petstore/pets'

  constructor(public http: HttpClient) { }

  buscarInformacao() {
    return this.http.get(`${this.apiUrl}`);
  }

}
