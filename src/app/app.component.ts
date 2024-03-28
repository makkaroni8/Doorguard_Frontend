import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "./services/authservice";
import {NgIf} from "@angular/common";
import {AccountSettingsDialogComponent} from "./dialogs/account-settings-dialog/account-settings-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, MatIconButton, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'doorguadFrontend';
  loggedIn: boolean = false;
  accountToken: string | null = null;

  constructor(protected authService: AuthService,
              private router: Router,
              private dialog: MatDialog) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginStatus();
      }
    });
  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.loggedIn = this.authService.isLoggedIn();
    if (this.loggedIn) {
      this.accountToken = this.authService.getToken();
    } else {
      this.accountToken = null;
    }
  }

  logout(): void {
    this.authService.removeUsername();
    this.authService.removeToken();
    this.router.navigate(['']);
  }

  settings() {
    const dialogRef = this.dialog.open(AccountSettingsDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  dashboard() {
    this.router.navigate(['/admin-page']);
  }
}
