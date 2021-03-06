import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/paises-interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!:Country;

  constructor(private activeteRoute:ActivatedRoute,private paisService:PaisService) { }

  ngOnInit(): void {
    this.activeteRoute.params
      .pipe(
        switchMap(({ id })=>this.paisService.getPaisPorAlfa(id) ),
        tap(console.log)
      )
      .subscribe(pais=>this.pais = pais)
  }

}
