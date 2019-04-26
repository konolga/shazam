import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs'; // Observables, manage stream of data
import {Song} from '../song.model';
import {SongsService} from '../songs.service';
import { LoaderService } from '../../components/shared/loader/loader.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit, OnDestroy{

   public songs: Song[] = [];


   constructor(public songsService: SongsService){}

   ngOnInit() {
    this.songsService.getSongs().subscribe((res:Song[])=>{
    this.songs = res;
    })
}

   ngOnDestroy(){
     //this.songsSubscription.unsubscribe(); // to prevent memory leak
   }
}
