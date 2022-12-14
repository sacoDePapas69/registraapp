import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  qrCodeString= 'vacio'; 
  scannedResult:any;
  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  usuario={
    nom:'',
    sec:'',
    fec:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
    this.qrCodeString=this.qrCodeString.concat('-/-');
    this.qrCodeString=this.qrCodeString.concat(this.usuario.sec);
    this.qrCodeString=this.qrCodeString.concat('-/-');
    this.qrCodeString=this.qrCodeString.concat(this.usuario.fec);
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
  
}
