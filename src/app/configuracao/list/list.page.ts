import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Config } from '../../model/config.model';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  configuracoes: Config[];    
  configuracao: Config;      
        
  constructor(private router: Router, private configService: ConfigService) { }
  
  ngOnInit() {
    this.configService.getConfig()
      .subscribe( data => {
        this.configuracoes = data;
      });
  }

  addConfig(){
    //alert('vou redirecionar');
    this.router.navigate(['configuracao-add']);
  }

}
