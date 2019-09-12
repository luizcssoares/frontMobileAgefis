import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimento } from '../model/movimento.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
 
/**
* Service Vaga
*/
export class MovimentoService {
 
    private apiUrlMovimento = environment.urlBase + '/movimento';  // URL para web api
    private apiUrlOcupacao = environment.urlBase + '/ocupacao';  // URL para web api
    private apiUrlDesocupacao = environment.urlBase + '/desocupacao';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    constructor(private http: HttpClient) { }
     
    getDesocupacoes(){ 
        return this.http.get<Movimento[]>(this.apiUrlOcupacao);                       
    }

	getMovimentos(){ 
        return this.http.get<Movimento[]>(this.apiUrlMovimento);                       
    }
    
    getOcupacaoByNumplaca(numplaca: string) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Movimento>(this.apiUrlOcupacao + '/' + numplaca);
    }

    getOcupacaoById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Movimento>(this.apiUrlMovimento + '/' + id);
    }
	        
    addOcupacao(movimento: Movimento) {
        return this.http.post(this.apiUrlOcupacao, movimento);
    }
       
    addDesocupacao(movimento: Movimento) 
    {
        return this.http.put(this.apiUrlDesocupacao, movimento);        
    }

    //editMovimento(movimento: Movimento) {
    //    this.selectedMovimento = Object.assign({}, movimento);
    //}        
}