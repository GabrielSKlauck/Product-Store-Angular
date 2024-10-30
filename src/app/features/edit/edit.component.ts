import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from "../../shared/components/back-to-list/back-to-list.component";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, RouterLink, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)

  product: Product = inject(ActivatedRoute).snapshot.data['product'];
  router = inject(Router);


  onSubmit(product: Product) {
    this.productService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open("Produto editado com sucesso", "Ok");

      this.router.navigateByUrl('/')
    })
  }

}
