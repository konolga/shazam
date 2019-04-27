import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {Subject, Observable } from 'rxjs';
import {Song} from './song.model';
import { debounceTime, distinctUntilChanged, map,  switchMap, filter} from 'rxjs/operators';




@Injectable({providedIn: 'root'})
export class SongsService {
private songs: Song[] = [];
private songsUpdated = new Subject<Song[]>();

constructor(private httpClient: HttpClient) {}
baseUrl: string ='http://localhost:8080/api/songs';

  getSongs() {
   return this.httpClient.get<{songs: Song[]}>(this.baseUrl);
  }
  search(terms: Observable<string>){
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
  )
}
searchEntries(term) {
  return this.getSongs().forEach(el=>el.songs.filter(song=>song.title.includes(term)));
}
}
