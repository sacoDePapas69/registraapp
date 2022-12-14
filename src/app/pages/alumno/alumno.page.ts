import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  
  codigo2: any;

  constructor(private barcodeScanner: BarcodeScanner, private menuController: MenuController) { }

 

  ngOnInit() {
  }
  scaner(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.codigo2= barcodeData.text;
      console.log('Barcode data', this.codigo2);
     }).catch(err => {
         console.log('Error', err);
     });
  }
  
  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
