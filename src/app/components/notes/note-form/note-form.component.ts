import { INote } from './../../../interfaces/notes/INote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  public newNote: INote = {
    text: "Awesome text",
    title: "Awesome note"
  }


  constructor() { }

  ngOnInit(): void {
  }

  public addNote(): boolean {
    console.log("This is a test");
    return true;
  }

}
