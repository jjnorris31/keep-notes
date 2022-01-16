import { Injectable } from "@angular/core";
import { INote } from "../interfaces/notes/INote";

@Injectable()
export class NoteService {

    private _notes: INote[] = [
        {title: "Nota 1", text: "Esta es la nota 1"},
        {title: "Nota 2", text: "Esta es la nota 2"},
        {title: "Nota 3", text: "Esta es la nota 3"},
    ];

    get notes(): INote[] {
        return [...this._notes];
    }

    constructor() {
        console.log('service has started');
        
    }

    public addNewNote(newNote: INote) {
        this._notes.push(newNote);
      }
}