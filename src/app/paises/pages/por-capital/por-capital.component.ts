import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino: string    = '';
  hayErro: boolean   = false;
  paises : Country[] = [];


  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayErro = false;
    this.termino = termino;
    this.paisService.buscarCapital(termino)
    .subscribe((paises)=>{
        console.log(paises)
        this.paises = paises;
    },(error) =>{
        this.hayErro = true;
        this.paises=[];
    });

  }
  sugerencias(termino:string){
    this.hayErro = false;
 
  }
}
