import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from './note-form/note-form.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [NoteService],
  declarations: [NoteComponent, NoteListComponent, NoteFormComponent],
  exports: [NoteListComponent, NoteFormComponent]
})
export class NotesModule { }