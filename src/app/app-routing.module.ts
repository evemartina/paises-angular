import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';



const routes : Routes = [
    {
        path:'',
        component:PorPaisComponent,
        pathMatch:'full'
    },
    {
        path:'region',
        component:PorRegionComponent,
        pathMatch:'full'
    },
    {
        path:'capital',
        component:PorCapitalComponent,
        pathMatch:'full'
    },
    {
        path:'pais/:id',
        component:VerPaisComponent,
        pathMatch:'full'
    },
    {
        path:'**',
        redirectTo:''
    }


];



@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule{

}