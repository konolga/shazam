import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Song} from './song.model';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;

@Injectable({providedIn: 'root'})
export class SongsService {


constructor(private httpClient: HttpClient) {}
//baseUrl: string = BACKEND_URL + '/songs';


getSongs() {
  return this.httpClient.get(BACKEND_URL);
}

getFavorites(): Observable<Object> {
  return this.httpClient.get(BACKEND_URL + 'api/getAllFavorites');
}

addToFavorites(title: string) {
  return this.httpClient.post(BACKEND_URL + 'api/addToFavorites', title);
}

}
