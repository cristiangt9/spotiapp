import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicies/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any;
  loading: boolean;
  topTracks: any = [];
  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService
              ) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    });
  }

  ngOnInit() {
  }
  getArtista( id: string) {
    this.loading = true;
    this.spotify.getArtista( id ).subscribe( (artista: any) => {this.artista = artista; this.loading = false; } );
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id ).subscribe( top => this.topTracks = top);
  }
}
