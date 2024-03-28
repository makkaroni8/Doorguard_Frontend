import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {DatePipe, NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-codes-table',
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
  templateUrl: './codes-table.component.html',
  styleUrl: './codes-table.component.css'
})
export class CodesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'password', 'onetimePassword', 'onedayPassword', 'creationDate', 'expirationDate', 'activated', 'actions'];
  dataSource!: MatTableDataSource<any>;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getAllCodes();
  }

  getAllCodes(): void {
    this.http.get<any[]>('http://localhost:8080/get-all-codes').subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
      },
      error => {
        console.log('Error occurred while fetching data:', error);
      }
    );
  }

  removeCode(id: number): void {
    this.http.delete(`http://localhost:8080/delete-code/${id}`,
      {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully removed.');
        this.getAllCodes();
      },
      error => {
        console.error('Error occurred while removing code:', error);
      }
    );
  }

  deactivateCode(id: number): void {
    this.http.put(`http://localhost:8080/deactivate-code/${id}`,
      {}, {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully deactivated.');
        this.getAllCodes();
      },
      error => {
        console.error('Error occurred while deactivating code:', error);
      }
    );
  }

  activateCode(id: number): void {
    this.http.put(`http://localhost:8080/activate-code/${id}`,
      {}, {responseType: 'text'}).subscribe(
      () => {
        console.log('Code successfully activated.');
        this.getAllCodes();
      },
      error => {
        console.error('Error occurred while activating code:', error);
      }
    );
  }
}
