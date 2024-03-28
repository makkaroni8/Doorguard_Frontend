import {Component} from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

import {SnackbarService} from "../services/snackbarservice";
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    HttpClientModule
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  username?: string;
  password?: string;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private snackbarService: SnackbarService,
              private http: HttpClient,
              private router: Router) {
  }

  private baseUrl = 'http://localhost:8080'; // Ihr Backend-URL

  use(username: string | undefined, password: string | undefined): Observable<string> {
    const url = `${this.baseUrl}/login`;
    const body = {username, password};
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    console.log(body)
    return this.http.post<string>(url, body, {headers, responseType: 'json'});
  }

  login(): void {
    console.log("username: " + this.username + " password: " + this.password)
    this.use(this.username, this.password)
      .subscribe(
        accountCode => {
          console.log('Logged in successfully. Account code:', accountCode);
          this.snackbarService.openSnackbar('Success: Login Erfolgreich', 3000, true);
          this.router.navigate(['/admin-page']);
        },
        error => {
          console.error('Login failed:', error);
          this.snackbarService.openSnackbar('Error: Login fehlgeschlagen', 3000, false);
        }
      );
    this.dialogRef.close();
  }

}
