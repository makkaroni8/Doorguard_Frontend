import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GeneratedPasswordDialogComponent} from "../../generated-password-dialog/generated-password-dialog.component";

@Component({
  selector: 'app-password-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatFormField,
    MatSelect,
    FormsModule,
    MatOption,
    HttpClientModule,
    MatLabel
  ],
  templateUrl: './password-dialog.component.html',
  styleUrl: './password-dialog.component.css'
})
export class PasswordDialogComponent {
  passwordType: string = 'onetime'; // Default to onetime

  constructor(
    private dialogRef: MatDialogRef<PasswordDialogComponent>,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}

  generatePassword(): void {
    this.http.post<string>('http://localhost:8080/generate-code', {
      onetimePassword: this.passwordType === 'onetime',
      onedayPassword: this.passwordType === 'oneday'
    }).subscribe(password => {
      this.dialog.open(GeneratedPasswordDialogComponent, {
        data: { password: password }
      });
      this.dialogRef.close();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
