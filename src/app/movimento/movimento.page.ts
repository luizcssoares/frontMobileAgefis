import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../service/movimento.service';
import { Movimento } from '../model/movimento.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movimento',
  templateUrl: './movimento.page.html',
  styleUrls: ['./movimento.page.scss'],
})
export class MovimentoPage implements OnInit {

  movimento : Movimento;
  movimentos : Movimento[];

  constructor(private router: Router, private movimentoService: MovimentoService) { }
  
  ngOnInit() {    
    
      this.movimentoService.getMovimentos()
          .subscribe( data => {
          this.movimentos = data;
      });
  }

}
