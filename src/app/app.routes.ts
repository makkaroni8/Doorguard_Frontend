import {Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {CodesTableComponent} from "./components/codes-table/codes-table.component";
import {authGuard} from "./services/authGuard";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin-page', component: AdminPageComponent, canActivate: [authGuard]},
  {path: 'codes-table', component: CodesTableComponent, canActivate: [authGuard]},
];
