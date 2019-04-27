import {Component, OnInit} from '@angular/core';
import {Subject, Observable } from 'rxjs';
import {Song} from '../song.model';
import {SongsService} from '../songs.service';
import {SongSearchComponent} from '../song-search/song-search.component';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit{

   public songs: Song[] = [];

   public searchResults: SongSearchComponent
   searchTerm$ = new Subject<string>();


   constructor(public songsService: SongsService) {}

   ngOnInit() {
    this.songsService.getSongs().subscribe((res:Song[]) => {
    this.songs = res;
    });


  }
}
