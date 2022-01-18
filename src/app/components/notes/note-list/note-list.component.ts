import { NoteService } from 'src/app/services/note.service';
import { INote } from './../../../interfaces/notes/INote';
import { Component, Input } from "@angular/core";

@Component({
    selector: "note-list",
    templateUrl: "./note-list.component.html",
    styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent {

    
    constructor(private noteService: NoteService) {}

    get notes(): INote[] {
        return this.noteService.notes;
    }
}