import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-languageapi',
  templateUrl: './languageapi.component.html',
  styleUrls: ['./languageapi.component.css']
})
export class LanguageapiComponent implements OnInit {
  paises: any = [];
  capitales: any = [];
  constructor( private http: HttpClient) {
    this.http.get("https://restcountries.eu/rest/v2/lang/es")
    .subscribe( (resp: any) => {
      console.log(resp);
      this.paises = resp;
    });
    this.http.get("https://restcountries.eu/rest/v2/all").subscribe( (resp: any) => this.capitales = resp);
  }

  ngOnInit() {
  }

}
