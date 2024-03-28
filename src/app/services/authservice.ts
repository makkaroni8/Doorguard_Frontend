import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly tokenKey = 'userToken';

  constructor() { }

  // Methode zum Speichern des Tokens im Local Storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Methode zum Abrufen des Tokens aus dem Local Storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Methode zum Entfernen des Tokens aus dem Local Storage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Methode zur Überprüfung, ob ein Token im Local Storage vorhanden ist
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
