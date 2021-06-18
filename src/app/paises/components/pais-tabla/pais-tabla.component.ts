import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',

})
export class PaisTablaComponent  {

  @Input() paises:Country[]=[];

  constructor() { }

 

}
