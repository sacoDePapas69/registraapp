import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})

export class LogoutPage implements OnInit {

  constructor( private navController: NavController,) { }

  ngOnInit() {
    this.Salir(); 
    console.log('cerrado');
  }

  async Salir(){
    console.log('cerrado');
    localStorage.setItem('ingresado','');
    this.navController.navigateRoot('login');
  }
}
