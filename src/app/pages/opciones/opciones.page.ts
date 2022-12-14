import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {
 
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController, 
              private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  //metodo que muestra un mensaje con ok
  async mensajeSaludo() {
    const alert = await this.alertController.create({
      header: 'Saludo',
      subHeader: 'Bienvenida',
      message: 'Gracias por visitar mi App',
      buttons: ['OK'],
    });

    await alert.present();
  }


  //metodo que muestra mensaje con dos botones
  async okCancel() {
    const alert = await this.alertController.create({
      header: 'Le esta gustando nuestra app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  //crea ventana con input de datos
  async input() {
    const alert = await this.alertController.create({
      header: 'Por favor ingrese sus datos',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Utilidad',
        },
        {
          placeholder: 'Nombre (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Dejenos un comentario!!',
        },
      ],
    });

    await alert.present();
  }

}
