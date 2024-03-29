import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app_theme';

  themeSignal = signal<string>(localStorage.getItem(this.THEME_KEY) || 'light');

  setTheme(theme: string) {
    this.themeSignal.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  updateTheme() {
    this.themeSignal.update((value) => (value === "dark" ? "light" : "dark"));
    localStorage.setItem(this.THEME_KEY, this.themeSignal());
  }
}
