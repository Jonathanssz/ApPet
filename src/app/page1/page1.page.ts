import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  public listaPets: any = [];

  constructor(private database: DatabaseService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getInformacao();
  }

  getInformacao() {
    return new Promise( (resolve, reject) => {
      this.database.buscarInformacao().subscribe(
        (dados: any) => {
          this.listaPets = dados;
          resolve(dados.json);
        },
        error => {
          console.error(error);
          reject(error.json);
        }
      );
    }).catch(e => console.error(e));
  }

  id: string = 'id';
  reverse: boolean = false;
  ordem(id) {
    this.id = id;
    this.reverse = !this.reverse
  }

}
