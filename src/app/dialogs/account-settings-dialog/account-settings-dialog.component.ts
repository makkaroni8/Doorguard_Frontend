import {Component} from '@angular/core';
import {MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from "@angular/material/expansion";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthService} from "../../services/authservice";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SnackbarService} from "../../services/snackbarservice";


@Component({
  selector: 'app-account-settings-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatFormField,
    MatInput,
    FormsModule,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule
  ],
  templateUrl: './account-settings-dialog.component.html',
  styleUrl: './account-settings-dialog.component.css'
})
export class AccountSettingsDialogComponent {
  newName?: string;
  newPassword?: string;
  newCode?: string;

  constructor(public dialogRef: MatDialogRef<AccountSettingsDialogComponent>,
              private authService: AuthService,
              private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  updatePassword() {
    // Überprüfen, ob das neue Passwort leer oder nur aus Leerzeichen besteht
    if (!this.newPassword || !this.newPassword.trim()) {
      this.snackbarService.openSnackbar('Error: Please enter a valid new password', 3000, false);
      return;
    }

    console.log('New password:', this.newPassword);
    const url = 'http://192.168.178.76/api/update-password';

    this.http.put(url, {
      accountCode: this.authService.getToken(),
      password: this.newPassword
    }, {responseType: 'text'}).subscribe(
      response => {
        console.log('Password updated successfully:', response);
        this.snackbarService.openSnackbar('Success: Password Erfolgreich geändert', 3000, true);
        this.dialogRef.close();
      },
      error => {
        console.error('Error occurred while updating password:', error);
        this.snackbarService.openSnackbar('Error: Password konnte nicht geändert werden', 3000, false);
      }
    );
  }

  updateName() {
    // Überprüfen, ob der neue Name leer oder nur aus Leerzeichen besteht
    if (!this.newName || !this.newName.trim()) {
      this.snackbarService.openSnackbar('Error: Please enter a valid new name', 3000, false);
      return;
    }

    console.log('New name:', this.newName);
    const accountCode = this.authService.getToken();
    const url = 'http://192.168.178.76/api/update-name';

    this.http.put(url, {
      accountCode: accountCode,
      name: this.newName
    }, {responseType: 'text'}).subscribe(
      response => {
        console.log('Name updated successfully:', response);
        this.authService.setUsername(this.newName);
        this.snackbarService.openSnackbar('Success: Name Erfolgreich geändert', 3000, true);
        this.dialogRef.close();
      },
      error => {
        console.error('Error occurred while updating name:', error);
        this.snackbarService.openSnackbar('Error: Name konnte nicht geändert werden', 3000, false);
      }
    );
  }

  updateCode() {
    // Überprüfen, ob der neue Code leer oder nur aus Leerzeichen besteht
    if (!this.newCode || !this.newCode.trim()) {
      this.snackbarService.openSnackbar('Error: Please enter a valid new code', 3000, false);
      return;
    }

    console.log('New code:', this.newCode);
    const accountCode = this.authService.getToken();
    const url = 'http://192.168.178.76/api/update-code';

    this.http.put(url, {
      accountCode: accountCode,
      newAccountCode: this.newCode
    }, {responseType: 'text'}).subscribe(
      response => {
        console.log('Code updated successfully:', response);
        this.authService.setToken(this.newCode);
        this.snackbarService.openSnackbar('Success: Code Erfolgreich geändert', 3000, true);
        this.dialogRef.close();
      },
      error => {
        console.error('Error occurred while updating code:', error);
        this.snackbarService.openSnackbar('Error: Code konnte nicht geändert werden', 3000, false);
      }
    );
  }


}
