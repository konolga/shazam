import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class SongsService {


constructor(private httpClient: HttpClient) {}
baseUrl: string ='http://localhost:8080/api/songs';


getSongs() {
  return this.httpClient.get(this.baseUrl);
}

getFavorites() {
  return this.httpClient.get('http://localhost:8080/api/getAllFavorites');
}

addToFavorites(title: string){
  return this.httpClient.post('http://localhost:8080/api/addToFavorites', title);
}

}
