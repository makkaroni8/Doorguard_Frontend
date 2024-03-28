import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClientModule} from "@angular/common/http";
import {DoorOpenDialogComponent} from "../../dialogs/door-open-dialog/door-open-dialog.component";

import {LoginDialogComponent} from "../../dialogs/login-dialog/login-dialog.component";
import {AuthService} from "../../services/authservice";

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
export class MainPageComponent implements OnInit {
  constructor(private dialog: MatDialog,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin-page']);
    }
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
