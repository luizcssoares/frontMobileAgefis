import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../service/vaga.service';
import { Vaga } from '../../model/vaga.model';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.page.html',
  styleUrls: ['./vaga.page.scss'],
})
export class VagaPage implements OnInit {

  sucesso: boolean = false; 
  vagaForm: FormGroup; 
  
  vaga: Vaga;      

  constructor(private router: Router, private formBuilder: FormBuilder, private vagaService: VagaService) { }

  ngOnInit() {
    this.vagaForm = this.formBuilder.group({        
      id: [],
      nome: ['', Validators.required],
      status: ['', Validators.required]                  
    });   
  }

  onSubmit(form: FormGroup) {        
      this.vagaService.addVaga(this.vagaForm.value)
        .subscribe( data => {
          this.router.navigate(['listavaga']);
      });
        this.sucesso = true;      
  } 

}
