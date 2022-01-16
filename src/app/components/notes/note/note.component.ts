import {Component} from '@angular/core';

@Component({
    templateUrl: "./note.component.html",
    styleUrls: ["./note.component.css"],
    selector: "note"
})
export class NoteComponent {
    public title: string;
    public text: string;

    constructor() {
        this.title = "Example note";
        this.text = "This is a note!"
    }

}