import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  productService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)

  product: Product = inject(ActivatedRoute).snapshot.data['product'];
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>(this.product.title, { 
      nonNullable: true, 
      validators: Validators.required 
    })
  })

  onSubmit(){
    this.productService.put(this.product.id, {
      title: this.form.controls.title.value,
      
    }).subscribe(() => {
      this.matSnackBar.open("Produto editado com sucesso", "Ok");

      this.router.navigateByUrl('/')
    })
  }

}
