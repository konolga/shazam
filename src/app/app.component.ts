import { Component } from '@angular/core';
import {Song} from './songs/song.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songsList: Song[] = [];
  /* [
  { title: 'First Song', autor: 'first song\'s autor' },
  { title: 'Second Song', autor: 'second song\'s autor' },
  { title: 'Third Song', autor: 'third song\'s autor' }
];
 */
  //todo get posts function
}
