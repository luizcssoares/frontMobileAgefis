import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Config } from '../../model/config.model';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  sucesso: boolean = false; 
  configForm: FormGroup; 
  
  config: Config;      

  constructor(private router: Router, private formBuilder: FormBuilder, private configService: ConfigService) { }

  ngOnInit() {
    this.configForm = this.formBuilder.group({        
      id: [],
      data: ['', Validators.required],
      valor: ['', Validators.required]                  
    });   
  }

  onSubmit(form: FormGroup) {        
      this.configService.addConfig(this.configForm.value)
        .subscribe( data => {
          this.router.navigate(['listaconfig']);
      });
        this.sucesso = true;      
  } 

}
