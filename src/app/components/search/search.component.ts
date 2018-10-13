import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicies/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string){
    console.log(termino);
    this.spotify.getArtista(termino).subscribe( (data: any) => {
      console.log(data);
      this.artistas = data;
      console.log(this.artistas);
    });
  }

}
