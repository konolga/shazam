import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongsService} from '../songs.service';


@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})


export class SongSearchComponent {
  enteredTitle = '';

  constructor(public songsService: SongsService) {}

  onSearchSong(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const title = form.value.title;
    this.songsService.searchSong(title);
    form.resetForm();
  }
}
