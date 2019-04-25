import { Component } from '@angular/core';
import {Song} from './songs/song.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songsList: Song[] = [
  { title: 'First Song', subtitle: 'first song\'s autor' },
  { title: 'Second Song', subtitle: 'second song\'s autor' },
  { title: 'Third Song', subtitle: 'third song\'s autor' }
];

  //todo get posts function
}
