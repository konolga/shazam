import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongsService} from '../songs.service';
import { Subject } from 'rxjs';
import { Song } from '../song.model';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})


export class SongSearchComponent {
  results: Song;
  searchTerm$ = new Subject<string>();

  constructor(private songsService: SongsService) {
  this.songsService.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
    });
  }
}
