import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `button{
      margin-right:5px;
    }`
  ]
})
export class PorRegionComponent  {

  regiones :string[]=['africa','americas','europe','oceania','asia'];
  regionActiva :string ='';
  paises :Country[] =[];
  hayErro: boolean   = false;

  constructor(private paisService:PaisService) { }
  getClassCss(region:string):string{
    return (region === this.regionActiva)?'btn btn-primary':'btn btn-outline-primary'
  }
  
  activarRegion(region:string){  
    if(region ===this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe((paises)=>this.paises = paises);

  }

}
