import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from "../../shared/components/form/form.component";
import { Product } from '../../shared/interfaces/product.interface';
import { BackToListComponent } from "../../shared/components/back-to-list/back-to-list.component";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, RouterLink, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  productService = inject(ProductsService);

  matSnackBar = inject(MatSnackBar);

  Router = inject(Router);

  onSubmit(product: Product){
    this.productService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso', 'Ok');

      this.Router.navigateByUrl("/");
    })
    
  }

}
