import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder, private menu : MenuController) { }

  sucesso: boolean = false; 

  ngOnInit() {
    
  }

  onSubmit() {    
      this.router.navigate(['home']);    
  }

}
