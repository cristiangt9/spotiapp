import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
    console.log('Spotifi service ready!!');
  }
  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDdtkmsCGvskWrmN5D1ehseG3HX7AK2M69dTVK9_sDUJoqSZ6UqjvHIkNUo3Tc_rCNVqNjoqPPzq7BRErs',
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAS32UVyn_BfMOVkq70zCdIf9hgZnhODvNiNZA7Ef9v3pFJIMmYjfEJY44f2VuBuRmtmhIKQjpvTfBm15_BNQTaiQYa0CXnlWBAjgwrkP0_nKg072X6iFw74a1-6PqYhFGbkLo3vtUCo76S9wBHtCkUITDSNaeEoA',
    // });
    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    // .pipe( map(data => data['albums'].items));

    return this.getQuery('browse/new-releases').pipe( map(data => data['albums'].items));
  }

  getArtistas( termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQAS32UVyn_BfMOVkq70zCdIf9hgZnhODvNiNZA7Ef9v3pFJIMmYjfEJY44f2VuBuRmtmhIKQjpvTfBm15_BNQTaiQYa0CXnlWBAjgwrkP0_nKg072X6iFw74a1-6PqYhFGbkLo3vtUCo76S9wBHtCkUITDSNaeEoA',
    // });
    // return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, {headers})
    // .pipe( map( (data: any) => data.artists.items));
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`).pipe( map( (data: any) => data.artists.items));
  }

  getArtista( id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ec`).pipe( map( (data: any) => data.tracks));
  }
}
