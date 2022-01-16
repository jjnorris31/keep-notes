import { INote } from './../../../interfaces/notes/INote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  public notes: INote[] = [
    {title: "Nota 1", text: "Esta es la nota 1"},
    {title: "Nota 2", text: "Esta es la nota 2"},
    {title: "Nota 3", text: "Esta es la nota 3"},
  ]

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

    this.notes.push(this.newNote);
    
    return true;
  }

}
