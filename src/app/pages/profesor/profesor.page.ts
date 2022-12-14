import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ServicesdatosService, Datos } from '../../services/servicesdatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  code : any;
  datos : Datos[] = [];
  newDato: Datos = <Datos>{};

  constructor(private navController: NavController,  
    private toastController: ToastController,
    private barcodeScanner: BarcodeScanner,
    private menuController: MenuController, 
    private alertController: AlertController,
    private serviceDatos: ServicesdatosService ) {  }


  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      this.qr(this.code);
      console.log('Barcode data', this.code);
     }).catch(err => {
         console.log('Error', err);
     });
     this.navController.navigateForward('/home');
  }

  ngOnInit() {
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }
  async qr(code){
    const alert = await this.alertController.create({ 
      header: 'Scanned',
      message: code,
    })
    await alert.present();
  }


  loadDatos(){
    this.serviceDatos.getDatos().then(datos=>{ 
      this.datos = datos;
    })
  }

  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    toast.present();
  }
  

    
}
