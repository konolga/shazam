import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songsList =
  [
  { title: 'First Song', autor: 'first song\'s autor' },
  { title: 'Second Song', autor: 'second song\'s autor' },
  { title: 'Third Song', autor: 'third song\'s autor' }
];

  //todo get posts function
}
