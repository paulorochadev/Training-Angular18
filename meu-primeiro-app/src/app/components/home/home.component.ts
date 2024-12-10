import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);

  // INFO VEIO DO APP PARA O HOME - @INPUT
  @Input("nameProps") valorAleatorio!: string;

  // INFO VAI DO HOME PARA O APP - @OUTPUT
  @Output() emitindoValorName = new EventEmitter<string>();

  name = "Paulo";
  idButton = 10;
  meuBoleano = false;
  deveMostrarTitulo = false;
  listItems = ["Pedro", "João", "Maria"]

  atualizaBoleano(valor: boolean) {
    this.meuBoleano = valor;
  }

  submitEvent(event: any){
    alert("TESTE - OnClick Event!")
    console.log(event)
  }

  // submit(){
  //   alert("TESTE - OnClick!")
  //   console.log("TESTE - OnClick!")
  // }

  submit() {
    this.emitindoValorName.emit(this.name);
    this.enviaFormularioService.enviaInformacaoParaBackend("enviando info");
  }
}
