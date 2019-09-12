import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../service/movimento.service';
import { VagaService } from '../service/vaga.service';
import { Movimento } from '../model/movimento.model';
import {Router} from "@angular/router";
import { Vaga } from '../model/vaga.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ocupacao',
  templateUrl: './ocupacao.page.html',
  styleUrls: ['./ocupacao.page.scss'],
})
export class OcupacaoPage implements OnInit {

  sucesso: boolean = false; 
  ocupacaoForm: FormGroup; 
  
  ocupacoes: Movimento[];    
  ocupacao: Movimento;      

  vaga : Vaga;
  vagas : Vaga[];

  constructor(private router: Router, private formBuilder: FormBuilder, private movimentoService: MovimentoService, private vagaService : VagaService) { }
  
  ngOnInit() {    
    this.leVagas();

    this.ocupacaoForm = this.formBuilder.group({    
      numplaca: ['', Validators.required],
      idvaga: ['', Validators.required],                          
      tipo: ['', Validators.required]           
    });   
  }

  onSubmit(form: FormGroup) {       
    //this.ocupacaoDTO.value['numplaca'] = this.ocupacaoForm.value['numplaca'];
    //this.ocupacaoDTO.value['idvaga'] =  this.ocupacaoForm.value['idvaga'];

    //alert(this.ocupacaoDTO.value['numplaca']);
    //alert(this.ocupacaoDTO.value['idvaga']);

    this.movimentoService.addOcupacao(this.ocupacaoForm.value)
      .subscribe( data => {
        this.router.navigate(['movimento']);
     });
      this.sucesso = true;      
  } 

  leVagas(){
    this.vagaService.getVagas()
      .subscribe( data => {
        this.vagas = data;
      });
  }

}
