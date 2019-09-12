import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsuarioService} from "../../service/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private usuarioService: UsuarioService) { }

  sucesso: boolean = false; 
  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required]            
    });
  }

  onSubmit(form: FormGroup) {
    //this.produtoService.addProduto(this.addForm.value)
    this.usuarioService.addUsuario(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['vagas']);
      });
      this.sucesso = true;
  }
}
