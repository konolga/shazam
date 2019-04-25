import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Song } from '../song.model';


@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.css']
})


export class SongSearchComponent {
  enteredTitle = '';

  //constructor(public postsService: PostsService) {}

  onSearchSong(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const song: Song = {
        title: form.value.title,
        subtitle: '',
    };
    return song.title;
  //  this.postsService.searchSong(form.value.title, form.value.content);
    form.resetForm();
  }
}
