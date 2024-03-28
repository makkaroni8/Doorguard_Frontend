import {Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {PasswordDialogComponent} from "../password-dialog/password-dialog.component";
import {GeneratedPasswordDialogComponent} from "../../generated-password-dialog/generated-password-dialog.component";
import {SnackbarComponent} from "../../snackbar/snackbar.component";
import {SnackbarService} from "../../services/snackbarservice";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    RouterLink,
    HttpClientModule,
    MatSnackBarModule
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  adminPassword?: string;

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
      } else {
      }
    });
  }

  openDoor() {
    this.adminPassword = "66017";
    this.http.post('http://localhost:8080/unlock-door/' + this.adminPassword, {},
      {responseType: 'text'}).subscribe(
      () => {
        console.log('Door successfully unlocked.');
        this.snackbarService.openSnackbar('Your message here', 3000, true);
      },
      error => {
        console.error('Error occurred while unlocking door:', error);
        this.snackbarService.openSnackbar('Your message here', 3000, false);
      }
    );
  }
}
