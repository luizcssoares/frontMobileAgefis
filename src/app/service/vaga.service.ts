import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaga } from '../model/vaga.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
 
/**
* Service Vaga
*/
export class VagaService {
 
    private apiUrl = environment.urlBase + '/vaga';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    vaga : Vaga;
    selectedVaga : Vaga;
    vagaList : Vaga[];
     
    constructor(private http: HttpClient) { }
    
    /**
	* Listando vagas
    */
   
	getVagas(){ 
        return this.http.get<Vaga[]>(this.apiUrl);                       
    }
    
    getVagaById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Vaga>(this.apiUrl + '/' + id);
    }
	    
    deleteVaga(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
    
    addVaga(vaga: Vaga) {
        return this.http.post(this.apiUrl, vaga);
    }
       
    updateVaga(vaga: Vaga) 
    {
        return this.http.put(this.apiUrl + '/' + vaga.id, vaga);        
    }

    editVaga(vaga: Vaga) {
        this.selectedVaga = Object.assign({}, vaga);;
    }        
}