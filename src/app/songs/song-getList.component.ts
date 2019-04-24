import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-song-getList.css',
  templateUrl: './song-getList.component.html',
  styleUrls: ['./song-getList.component.css']
})
export class SongCreateListComponent{

   @Input() songs = [];
}
