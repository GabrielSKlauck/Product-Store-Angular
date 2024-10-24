import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  form = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required })
  })

  onSubmit(){
    this.productService.put({
      title: this.form.controls.title.value,
      
    }).subscribe(() => {
      this.matSnackBar.open("Produto criado com sucesso", "Ok");

      this.router.navigateByUrl('/')
    })
  }

  openSnackBar(){

  }
}
