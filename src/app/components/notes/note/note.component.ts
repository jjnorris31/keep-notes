import { Input } from '@angular/core';
import {Component} from '@angular/core';

@Component({
    templateUrl: "./note.component.html",
    styleUrls: ["./note.component.css"],
    selector: "note"
})
export class NoteComponent {
    @Input() title: string = "";
    @Input() text: string = "";
    
    constructor() {

    }

}