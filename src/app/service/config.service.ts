import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../model/config.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
 
/**
* Service Config
*/
export class ConfigService {
 
    private apiUrl = environment.urlBase + '/config';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    config : Config;
    selectedConfig : Config;
    configList : Config[];
     
    constructor(private http: HttpClient) { }
    
	getConfig(){ 
        return this.http.get<Config[]>(this.apiUrl);                       
    }
    
    getConfigById(id: number) {
        //alert(this.http.get<Produto>(this.apiUrl + '/' + id));
        return this.http.get<Config>(this.apiUrl + '/' + id);
    }
	    
    deleteConfig(id: number) {        
        return this.http.delete(this.apiUrl + '/' + id);
    }
    
    addConfig(config: Config) {
        return this.http.post(this.apiUrl, config);
    }
}