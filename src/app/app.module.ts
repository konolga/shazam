import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatProgressSpinnerModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import {SongListComponent} from './songs/song-list/song-list.component';
import {HeaderComponent} from './header/header.component';
import {LoaderService} from './components/shared/loader/loader.service';
import {LoaderComponent} from './components/shared/loader/loader.component';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {SongSearchComponent} from './songs/song-search/song-search.component';
import {SongsService} from './songs/songs.service';


@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    HeaderComponent,
    SongSearchComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    HttpClientModule

  ],
  providers: [SongsService, LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
