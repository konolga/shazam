import {Component, OnInit} from '@angular/core';
import {Song} from '../song.model';
import {SongsService} from '../songs.service';


@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit{

   public songs: Song[] = [];


   constructor(public songsService: SongsService) {}

   ngOnInit() {
    this.songsService.getSongs().subscribe((res:Song[]) => {
    this.songs = res;
    });
  }
}
