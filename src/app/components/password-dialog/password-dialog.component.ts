import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  GeneratedPasswordDialogComponent
} from "../../dialogs/generated-password-dialog/generated-password-dialog.component";
import {SnackbarService} from "../../services/snackbarservice";
import {AuthService} from "../../services/authservice";

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
    private http: HttpClient,
    private snackbarService: SnackbarService,
    private authService: AuthService
  ) {
  }

  generatePassword(): void {
    this.http.post('http://localhost:8080/generate-code', {
      onetimePassword: this.passwordType === 'onetime',
      onedayPassword: this.passwordType === 'oneday',
      accountCode: this.authService.getToken()
    }, {responseType: 'text'}).subscribe({
      next: (password) => {
        this.dialog.open(GeneratedPasswordDialogComponent, {
          data: {password: password}
        });
        this.snackbarService.openSnackbar('Success: Code erfolgreich erstellt', 3000, true);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Error occurred while generating password:', error);
        this.snackbarService.openSnackbar('Error: Code konnte nicht erstellt werden', 3000, false);
      }
    });
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
