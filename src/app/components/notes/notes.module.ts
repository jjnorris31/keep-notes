import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './note-form/note-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NoteComponent, NoteListComponent, NoteFormComponent],
  exports: [NoteListComponent, NoteFormComponent]
})
export class NotesModule { }