import { INote } from './../../../interfaces/notes/INote';
import { Component, Input } from "@angular/core";

@Component({
    selector: "note-list",
    templateUrl: "./note-list.component.html",
    styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent {

    @Input() notes: INote[] = [];
    constructor() {}
}