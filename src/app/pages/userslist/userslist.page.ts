import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {
  codigo = localStorage.getItem('codigo');
  characters = []

  constructor(private http: HttpClient, private menuController: MenuController
    ) { }

  ngOnInit() {
    
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
