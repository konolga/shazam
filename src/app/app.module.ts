import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {SongListComponent} from './songs/song-list/song-list.component';
import {HeaderComponent} from './header/header.component';
import {SongSearchComponent} from './songs/song-search/song-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    HeaderComponent,
    SongSearchComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
