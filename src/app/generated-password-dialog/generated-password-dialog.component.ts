import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-generated-password-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './generated-password-dialog.component.html',
  styleUrl: './generated-password-dialog.component.css'
})
export class GeneratedPasswordDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { password: string }) {}
}
