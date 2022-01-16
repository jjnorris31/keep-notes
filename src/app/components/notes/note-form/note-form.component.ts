import { NoteService } from 'src/app/services/note.service';
import { INote } from './../../../interfaces/notes/INote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  public newNote: INote = {
    text: "",
    title: ""
  }


  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  public addNote(): boolean {

    if (this.newNote.text === "") {
      console.log("El texto es requerido");
      return false;
    }

    if (this.newNote.title === "") {
      console.log("El título es requerido");
      return false;
    }
    this.noteService.addNewNote(this.newNote);
    this.resetNewNote();
    
    return true;
  }

  resetNewNote() {
    this.newNote = {
      text: "",
      title: ""
    }
  }

}
