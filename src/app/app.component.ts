import { NoteService } from 'src/app/services/note.service';
import { INote } from './interfaces/notes/INote';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'bases';
  

  constructor(
    private noteService: NoteService
  ) {}

  get notes(): INote[] {
    return this.noteService.notes;
  }

  addNewNote(note: INote) {
    this.noteService.addNewNote(note);
  }

}
