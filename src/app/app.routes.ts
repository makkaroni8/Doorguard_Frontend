import {Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {CodesTableComponent} from "./components/codes-table/codes-table.component";
import {authGuard} from "./services/authGuard";
import {CodeUsageHistoryComponent} from "./components/code-usage-history/code-usage-history.component";

export const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'admin-page', component: AdminPageComponent, canActivate: [authGuard]},
  {path: 'codes-table', component: CodesTableComponent, canActivate: [authGuard]},
  {path: 'codes-history', component: CodeUsageHistoryComponent, canActivate: [authGuard]},
];
