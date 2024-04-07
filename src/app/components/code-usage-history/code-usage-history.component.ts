import {Component, OnInit} from '@angular/core';
import {DatePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SnackbarService} from "../../services/snackbarservice";
import {AuthService} from "../../services/authservice";

@Component({
  selector: 'app-code-usage-history',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIcon,
    MatIconButton,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    DatePipe,
    HttpClientModule,
    TitleCasePipe,
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './code-usage-history.component.html',
  styleUrl: './code-usage-history.component.scss'
})
export class CodeUsageHistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'usedCode', 'oneTimePassword', 'oneDayPassword', 'usageTime'];

  dataSource!: MatTableDataSource<any>;

  constructor(private http: HttpClient,
              private snackbarService: SnackbarService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.getAllCodes();
  }

  getAllCodes(): void {
    const token = this.authService.getToken();
    const url = `api/get-codes-history/${token}`;

    this.http.get<any[]>(url).subscribe(
      data => {
        data.reverse();
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.log('Error occurred while fetching data:', error);
        this.snackbarService.openSnackbar('Error: Konnte Daten nicht laden', 3000, false);
      }
    );
  }
}
