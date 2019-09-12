import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../../model/usuario.model';
import {Router} from "@angular/router";
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-vaga',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Usuario[];  
  usuario: Usuario;      
  filteredUsuarios: Usuario[];

  searchVaga : IonSearchbar;        
  constructor(private router: Router, private usuarioService: UsuarioService) { }
  
  ngOnInit() {
    this.usuarioService.getUsuarios()
    .subscribe( data => {
      this.usuarios = data;
      this.filteredUsuarios = data;
    });
  }

  addUsuario(){
    this.router.navigate(['usuario-add']);
  }

  filterUsuarios(ev: any) {    
    // preeche lista com filtro
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.usuarios = this.filteredUsuarios.filter((usuario) => {
        return (usuario.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}