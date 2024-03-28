import {Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {DoorOpenDialogComponent} from "../../door-open-dialog/door-open-dialog.component";
import {SnackbarService} from "../../services/snackbarservice";

import {LoginDialogComponent} from "../../login-dialog/login-dialog.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private dialog: MatDialog,
              private http: HttpClient,
              private snackbarService: SnackbarService) {
  }

  openDoorDialog(): void {
    const dialogRef = this.dialog.open(DoorOpenDialogComponent, {
      width: '250px',
      data: {}
    });
  }

  adminLogin(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px'
    });
  }
}
