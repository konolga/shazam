import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {delay} from 'rxjs/operators'
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

import {Song} from './song.model';


@Injectable({
  providedIn: 'root'
})
export class SongsService {
 songs: Song[] =  [
    { title: 'First Song', subtitle: 'first song\'s autor' },
    { title: 'Second Song', subtitle: 'second song\'s autor' },
    { title: 'Third Song', subtitle: 'third song\'s autor' }
  ];
  private songsFound = new Subject<Song[]>();
constructor(private httpClient: HttpClient) {}
baseUrl: string ='http://localhost:8080/api/songs';

  getSongs() {


    return this.httpClient.get(this.baseUrl).pipe(delay(1000))

     /*
    .subscribe(data => {
      this.songs = data.songs;
      this.songsFound.next([...this.songs]);
    }); */
  }
/*
  private extractData(res: Response) {
    let body = res.json();
          return body;
      }
      private handleError (error: Response | any) {
        console.error(error.message || error);
        return Subject.throw(error.message || error);
          }

          getSongByTitle(title: string): Observable<Song[]> {
            let myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            let myParams = new URLSearchParams();
            myParams.append('id', bookId);
                  let options = new RequestOptions({ headers: myHeaders, params: myParams });
                  return this.http.get(this.url, options)
                    .map(this.extractData)
                    .catch(this.handleError);
              } */

  searchSong(title){

  }
  getSongSearchListener() {
    return this.songsFound.asObservable();
  }

  addToFavorite(song) {
    //this.song.isFavorite = true;
  }
}
