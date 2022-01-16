import { INote } from './../../../interfaces/notes/INote';
import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  public addNote(): boolean {

    if (this.newNote.text === "") {
      console.log("El texto es requerido");
    }

    if (this.newNote.title === "") {
      console.log("El título es requerido");
    } 
    
    return true;
  }

}
