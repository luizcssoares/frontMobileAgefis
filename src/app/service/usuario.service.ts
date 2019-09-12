import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { LoginDTO } from '../model/loginDTO.model';
import { environment } from '../../environments/environment.prod';

@Injectable()
 
/**
* Service Usuario
*/
export class UsuarioService {
 
    private apiUrl   = environment.urlBase + '/usuario';  // URL para web api
    private apiLogin = environment.urlBase + '/login';  // URL para web api
    //private apiUrl = 'http://luizcssoares.gear.host/api/produto';  // URL para web api
    
    usuario : Usuario;
    usuarioSelected : Usuario;
    usuarioList : Usuario[];
    
    constructor(private http: HttpClient) { }
    
    /**
	* Listando usuarios
    */       
    getUsuarioById(id: number) {        
        return this.http.get<Usuario>(this.apiUrl + '/' + id);
    }

    getUsuarios() {        
        return this.http.get<Usuario[]>(this.apiUrl);
    }
    
    addUsuario(registro: Usuario) {               
        let config = {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
              'Accept':'application/json'
              },
              withCredentials: false
        }
        //alert(registro.nome);
        return this.http.post(this.apiUrl, registro);
    }

    getLogin(loginDTO: LoginDTO) {        
        return this.http.post<Usuario>(this.apiLogin,loginDTO);
    }
}