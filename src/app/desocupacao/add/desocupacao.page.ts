import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../../service/movimento.service';
import { Movimento } from '../../model/movimento.model';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-desocupacao',
  templateUrl: './desocupacao.page.html',
  styleUrls: ['./desocupacao.page.scss'],
})
export class DesocupacaoPage implements OnInit {

  sucesso: boolean = false; 
  desocupacaoForm: FormGroup; 
  id : any;
  numplaca : any;
  idvaga : any;
  entrada : any;
  horaentrada : any;
  saida : any;
  horasaida : any;
  valorpago : any;
  
  desocupacao: Movimento;      

  constructor(private router: Router, private formBuilder: FormBuilder, private movimentoService: MovimentoService, private storage: Storage) { 
    
  }

  movimentoDetail(){       
    this.storage.get('movimento').then((val) => {
          //let desocupacao = JSON.parse(val);           
          this.desocupacao = val; 
          this.id = this.desocupacao.id;
          this.numplaca = this.desocupacao.numplaca;
          this.idvaga = this.desocupacao.idvaga;
          this.entrada = this.desocupacao.entrada;
          this.horaentrada = this.desocupacao.horaentrada;
          this.saida = '2019-09-04';
          this.horasaida = '19:00:00';
          this.valorpago = 10;
     });
  }

  ngOnInit() {
   this.movimentoDetail(); 
    /*
    this.desocupacaoForm = this.formBuilder.group({        
      numplaca: ['', Validators.required],
      idvaga: ['', Validators.required],
      entrada: ['', Validators.required],
      horaentrada: ['', Validators.required],
      saida: ['', Validators.required],
      horasaida: ['', Validators.required],
      valorpago: ['', Validators.required]

    });   
    */
  }

  addDesocupacao(){
      this.movimentoDetail(); 
      this.movimentoService.addDesocupacao(this.desocupacao)
      .subscribe( data => {
          this.router.navigate(['movimento']);
      });
      this.sucesso = true;      
  }

  /*
  onSubmit(form: FormGroup) {        
      this.movimentoService.addDesocupacao(this.desocupacaoForm.value)
        .subscribe( data => {
          this.router.navigate(['movimento']);
      });
      this.sucesso = true;      
  } 
  */

  leDesocupacao(idmov: any){
      this.movimentoService.getOcupacaoById(idmov)
      .subscribe( data => {
        this.desocupacao = data;
      });
  }
}
