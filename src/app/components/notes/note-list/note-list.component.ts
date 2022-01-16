import { Component } from "@angular/core";

interface Note {
    title: string;
    text: string;
}

@Component({
    selector: "note-list",
    templateUrl: "./note-list.component.html",
    styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent {
    public notes: Note[] = [
        {title: "Nota 1", text: "Esta es la nota 1"},
        {title: "Nota 2", text: "Esta es la nota 2"},
        {title: "Nota 3", text: "Esta es la nota 3"},
    ]
    constructor() {}
}