import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {AuthService} from "./services/authservice";
import {NgIf} from "@angular/common";

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
  username: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
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
      this.username = this.authService.getUsername();
    } else {
      this.username = null;
    }
  }

  logout(): void {
    this.authService.removeUsername();
    this.authService.removeToken();
    this.router.navigate(['']);
  }
}
