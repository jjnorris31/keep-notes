import { Component } from '@angular/core';
import { INote } from './interfaces/notes/INote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
  public notes: INote[] = [
    {title: "Nota 1", text: "Esta es la nota 1"},
    {title: "Nota 2", text: "Esta es la nota 2"},
    {title: "Nota 3", text: "Esta es la nota 3"},
  ];
}
