import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormularioService {

  constructor() { }

  enviaInformacaoParaBackend(info: string){
    alert("Enviando para o Backend!")
    console.log("Enviando para o Backend!")
  }
}
