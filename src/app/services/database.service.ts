import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(public http: HttpClient) { }

  getInformacao() {
    return new Promise( (resolve, reject) => {
      this.http.request('GET', this.apiUrl, {responseType: 'json'}).subscribe(
        (result: any) => {
          console.log('>>> Utilizando HttpClient <<<');
          console.log(result);
          resolve(result.json);
        },
        error => {
          console.error(error);
          reject(error.json);
        }
      );
    }).catch(e => console.error(e));
  }

}
