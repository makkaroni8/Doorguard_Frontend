import {Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

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

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/generate-code';

  generatePasswordAndCreateCode(onetimePassword: boolean, onedayPassword: boolean): Observable<string> {

    const requestBody = {
      onetimePassword: onetimePassword,
      onedayPassword: onedayPassword
    };
    return this.http.post<string>(this.baseUrl, requestBody);
  }

  generatePassword(onetimePassword: boolean, onedayPassword: boolean): void {
    this.generatePasswordAndCreateCode(onetimePassword, onedayPassword)
      .subscribe(password => {
        this.generatedPassword = password;
      });
  }

}
