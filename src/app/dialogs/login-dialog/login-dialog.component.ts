import {Component, OnInit} from '@angular/core';
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

import {SnackbarService} from "../../services/snackbarservice";
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authservice";

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
export class LoginDialogComponent implements OnInit {
  username?: string;
  password?: string;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private snackbarService: SnackbarService,
              private http: HttpClient,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin-page']); // Wenn Benutzer bereits eingeloggt ist, direkt auf Admin-Seite weiterleiten
      this.dialogRef.close();
    }
  }

  private baseUrl = 'httphttp://192.168.178.76/api'; // Ihr Backend-URL

  use(username: string | undefined, password: string | undefined): Observable<any> {
    const url = `${this.baseUrl}/login`;
    const body = {username, password};
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    console.log(body);
    return this.http.post(url, body, {headers, responseType: 'text'});
  }


  login(): void {
    console.log("username: " + this.username + " password: " + this.password)
    this.use(this.username, this.password)
      .subscribe(
        accountCode => {
          console.log('Logged in successfully. Account code:', accountCode);
          this.snackbarService.openSnackbar('Success: Login Erfolgreich', 3000, true);
          this.authService.setToken(accountCode);
          this.authService.setUsername(this.username);
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
