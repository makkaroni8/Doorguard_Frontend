import {Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PasswordDialogComponent} from "../../dialogs/password-dialog/password-dialog.component";
import {SnackbarService} from "../../services/snackbarservice";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AuthService} from "../../services/authservice";

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

  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private snackbarService: SnackbarService,
              private authService: AuthService) {
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
    this.http.post('http://localhost:8080/unlock-door/' + this.authService.getToken(), {},
      {responseType: 'text'}).subscribe(
      () => {
        console.log('Door successfully unlocked.');
        this.snackbarService.openSnackbar('Success: Tür erfolgreich geöffnet', 3000, true);
      },
      error => {
        console.error('Error occurred while unlocking door:', error);
        this.snackbarService.openSnackbar('ERROR: Tür konnte nicht geöffnet werden', 3000, false);
      }
    );
  }

  openAccountSettingsDialog() {

  }
}
