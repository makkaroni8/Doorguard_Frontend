import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-generated-password-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatIcon
  ],
  templateUrl: './generated-password-dialog.component.html',
  styleUrl: './generated-password-dialog.component.css'
})
export class GeneratedPasswordDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<GeneratedPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {
  }

  sharePassword(): void {
    const password = this.data.password;
    const shareText = `Hier ist mein aktueller Code: ${password}, den ihr auf der Website xxx.de/opendoor eingeben müsst!`;

    if (navigator.share) {
      navigator.share({
        title: 'Share Code',
        text: shareText,
        url: 'https://example.com/opendoor' // Hier die tatsächliche URL Ihrer Website einfügen
      })
        .then(() => console.log('Code shared successfully'))
        .catch((error) => console.error('Error sharing code:', error));
    } else {
      this.snackBar.open('Sharing is not supported on this device.', 'Close', {
        duration: 3000
      });
    }
  }

}
