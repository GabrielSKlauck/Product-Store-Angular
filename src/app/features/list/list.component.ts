import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialogComponent, DialogService } from '../../shared/services/dialog.service';





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
  confirmationDialog = inject(DialogService)

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }

  onDelete(product: Product) {
    this.confirmationDialog.openDialog()
    .subscribe((answer) => {
      if(answer){
        this.productsService.delete(product.id).subscribe(() => {});
        location.reload()
      }
    })
  }
}
