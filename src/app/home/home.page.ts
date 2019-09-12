import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../service/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private formBuilder: FormBuilder, private usuarioService: UsuarioService, private menu : MenuController) {}
  ionViewWillEnter(){
    this.menu.swipeGesture(false);
  }

  ionViewDidLeave(){
    this.menu.swipeGesture(true);
  }

  sucesso: boolean = false; 
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]            
    });
  }

  onSubmit(form: FormGroup) {
    this.usuarioService.getLogin(this.loginForm.value)
      .subscribe( data => {
        this.router.navigate(['inicial']);
      });
    this.sucesso = true;
  }

  registro(){
    this.router.navigate(['registro']);
  }
}
