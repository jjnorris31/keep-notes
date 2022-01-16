import { INote } from './../../../interfaces/notes/INote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  @Output() onNewNote: EventEmitter<INote> = new EventEmitter();
  

  public newNote: INote = {
    text: "",
    title: ""
  }


  constructor() { }

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

    this.onNewNote.emit(this.newNote);
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
