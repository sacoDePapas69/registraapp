import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.page.html',
  styleUrls: ['./mostrar.page.scss'],
})
export class MostrarPage implements OnInit {
  

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }

}
