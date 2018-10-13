import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicies/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
    });
  }

  ngOnInit() {
  }
  
 
}
