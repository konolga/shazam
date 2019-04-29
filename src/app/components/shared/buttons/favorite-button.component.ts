import { Component, EventEmitter, Input, Output } from '@angular/core';


import {Song} from '../../../songs/song.model';
import {SongsService} from '../../../songs/songs.service';


@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html'
})
export class FavoriteButtonComponent {
  constructor(private songsService: SongsService) {}

  @Input() song: Song;
  @Output() toggleClicked = new EventEmitter<string>();
  showButton = false;

  toggleFavorite() {
    this.showButton = true;
    this.toggleClicked.emit(this.song.title);
    this.songsService.addToFavorites(this.song.title).subscribe();
  }
}
