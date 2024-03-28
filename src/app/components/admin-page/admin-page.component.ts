import {Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {PasswordDialogComponent} from "../password-dialog/password-dialog.component";

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  generatedPassword?: string;

  constructor(private dialog: MatDialog) {
  }

  openPasswordDialog(): void {
    const dialogRef = this.dialog.open(PasswordDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok') {
        // Handle "OK" action
      } else {
        // Handle "Close" action or do nothing
      }
    });
  }
}
