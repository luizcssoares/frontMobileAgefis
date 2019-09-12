import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../service/movimento.service';
import { Movimento } from '../../model/movimento.model';
import {Router} from "@angular/router";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  desocupacao : Movimento;
  desocupacoes : Movimento[];
  filteredDesocupacoes: Movimento[];

  constructor(private router: Router, private movimentoService: MovimentoService, private storage: Storage) { }
  
  ngOnInit() {        
      this.movimentoService.getDesocupacoes()
          .subscribe( data => {
          this.desocupacoes = data;
          this.filteredDesocupacoes = data;
      });
  }

  filterDesocupacoes(ev: any) {    
    // preeche lista com filtro
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.desocupacoes = this.filteredDesocupacoes.filter((desocupacao) => {
        return (this.desocupacao.numplaca.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selecionaOcupacao(movimento: Movimento){    
    //alert(movimento.id.toString());
    //this.storage.set('idmovimento', movimento.id.toString());   
    this.storage.set('movimento', movimento);   
    this.router.navigate(['desocupacao-add']);       
  }

}
