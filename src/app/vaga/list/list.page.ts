import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vaga.service';
import { Vaga } from '../../model/vaga.model';
import {Router} from "@angular/router";
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-vaga',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  vagas: Vaga[];  
  vaga: Vaga;      
  filteredVagas: Vaga[];

  searchVaga : IonSearchbar;        
  constructor(private router: Router, private vagaService: VagaService) { }
  
  ngOnInit() {
    this.listVaga();
  }

  listVaga(){
    this.vagaService.getVagas()
    .subscribe( data => {
      this.vagas = data;
      this.filteredVagas = data;
    });
  }

  addVaga(){
    //alert('vou redirecionar');
    this.router.navigate(['vaga-add']);
  }

  filterVagas(ev: any) {    
    // preeche lista com filtro
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.vagas = this.filteredVagas.filter((vaga) => {
        return (vaga.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


}