import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data  = [80,20] 
  public data2  = [1,50]
  public data3  = [44,43,42,31,57,23,22,23,33,41]
  public doughnutColors=[{
      backgroundColor: ['#F8F8FC','#54D1ED'],
      borderWidth:[0,0]
      }]
  public doughnutColors2=[{
    backgroundColor: ['#54D1ED','#F8F8FC'],
    borderWidth:[0,0]
    }]
  public doughnutColors3=[{
    backgroundColor: ['#41CF69','#C3C0CA','#C9C7D0','#D0CED5','#D7D5DB','#DDDCE1','#E4E3E7','#EBEAED','#F2F1F3','#F8F8F9'],
    borderWidth:[0,0,0,0,0,0,0,0,0,0]
    }]
  public chartOptions = {
    cutoutPercentage: 85
  };
  public ChartType  = "doughnut"

  //public items = ['Inicio']
  public items = [
            {nombre :'Inicio',icono:'home'},
            {nombre :'Historial',icono:'list'},
            {nombre :'Ahorrar',icono:''},
            {nombre :'Mi perfil',icono:'person_pin'},
            {nombre :'Mas',icono:'more_horiz'}]

  ngOnInit() {
  }  
}
 
