import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  digitalData = {
    site: {
      nome: 'Banco Pan'
    },
    page: {
      secao: 'CRM',
      subsecao1: 'LandingPage',
      estadoLogin: 'NL',
      nome: 'BP:CRM:LandingCRM:LpPortasAbertas'
    }
  };
  ngOnInit() {

    console.log(this.digitalData);
  }

}
