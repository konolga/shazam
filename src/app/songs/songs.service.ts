import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/operators';



@Injectable({providedIn: 'root'})
export class SongsService {

constructor(private httpClient: HttpClient) {}
baseUrl: string ='http://localhost:8080/api/songs';

  getSongs() {
    return this.httpClient.get(this.baseUrl).pipe(delay(1000));
  }
  searchSong(title: string){

  }
}
