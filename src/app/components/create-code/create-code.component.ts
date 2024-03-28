import { Component } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  selector: 'app-create-code',
  standalone: true,
  imports: [
    MatButton,
    MatDialogContent,
    MatDialogActions,
    MatDialogTitle,
    MatDialogClose
  ],
  templateUrl: './create-code.component.html',
  styleUrl: './create-code.component.css'
})
export class CreateCodeComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {

  }
}

