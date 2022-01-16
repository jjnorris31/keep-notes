import { INote } from './interfaces/notes/INote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  public addNewNote(newNote: INote) {
    console.log(newNote);
  }
}
