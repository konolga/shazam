import {Component, OnInit} from '@angular/core';
import {Song} from '../song.model';
import {SongsService} from '../songs.service';



@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit{

songs: Song[] = [];
filteredSongs: Song[] = [];



private _searchTerm: string;
get searchTerm(): string{
  return this._searchTerm;
}
set searchTerm(value: string){
this._searchTerm = value;
this.filteredSongs = this.filterSongs(value);

}


filterSongs(searchString: string){

  return this.songs.filter(song => song.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 );
}
   constructor(private songsService: SongsService) {}

   ngOnInit() {
    this.songsService.getSongs().subscribe( (res: Song[]) => {this.songs = res; this.filteredSongs = res; } );

    }
  }
