import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {

  nombre: string
  saludo: string
  date = new Date()
  
  Saludar(){
    console.log(this.nombre)
    console.log(this.date.getHours())
    if(this.date.getHours() >= 7 && this.date.getHours() < 12){
      this.saludo = "Hola, Buenos Dias " + this.nombre
    }
    if(this.date.getHours() >=12 && this.date.getHours() < 19){
      this.saludo = "Hola, Buenas Tardes " + this.nombre
    }
    else{
      this.saludo = "Hola, Buenas Noches " + this.nombre 
    }
    
  }
  
  constructor() {}

  ngOnInit(){}

}
