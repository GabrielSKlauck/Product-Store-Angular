import { Component, inject, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, Observable } from 'rxjs';


@Component({
  selector: 'confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar</h2>
<mat-dialog-content>
  Deseja mesmo deletar?
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button (click)="onNo()">Nao</button>
  <button mat-button (click)="onYes()" cdkFocusInitial>Sim</button>
</mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],

})
export class ConfirmationDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  router = inject(Router)
  matDialog = inject(MatDialog)
  constructor() { }

  openDialog(): Observable<boolean>{
    return this.matDialog.open(ConfirmationDialogComponent)
    .afterClosed()
    
  }
  }

