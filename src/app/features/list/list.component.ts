import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Deletar</h2>
<mat-dialog-content>
  Deseja mesmo deletar?
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button mat-dialog-close>Nao</button>
  <button mat-button mat-dialog-close cdkFocusInitial>Sim</button>
</mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  
})
export class COnfirmationDialogComponent {}


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: any[] = [];

  productsService = inject(ProductsService);
  router = inject(Router)
  matDialog = inject(MatDialog)

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.matDialog.open(COnfirmationDialogComponent).afterClosed().subscribe((data) => {
      console.log(data)
    })
  }
}
