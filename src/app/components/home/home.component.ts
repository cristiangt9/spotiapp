import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicies/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any = [];
  loading: boolean;
  error: boolean;
  messageError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
      this.loading = false;
    }, (errorServices) => {
      this.error = true;
      this.loading = false;
      this.messageError = errorServices.error.error.message;
    });
  }

  ngOnInit() {
  }
  
 
}
