import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly tokenKey = 'account_code';
  private readonly userName = 'account_name';

  constructor() {
  }

  setToken(token: string | undefined): void {
    localStorage.setItem(this.tokenKey, <string>token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  setUsername(username: string | undefined): void {
    localStorage.setItem(this.userName, <string>username)

  }

  getUsername(): string | null {
    return localStorage.getItem(this.userName);
  }

  removeUsername(): void {
    localStorage.removeItem(this.userName);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
