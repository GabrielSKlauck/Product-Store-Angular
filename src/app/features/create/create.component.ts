import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  productService = inject(ProductsService);

  matSnackBar = inject(MatSnackBar);

  Router = inject(Router);

  form = new FormGroup({
    title: new FormControl('', { nonNullable: true, validators: Validators.required })
  })

  onSubmit(){
    this.matSnackBar.open("Item criado", "Ok",{
      duration: 1500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });

    this.Router.navigateByUrl('/').catch()
    // this.productService.post({
    //   title: this.form.controls.title.value
    // }).subscribe(() => {
    //   this.form.reset()
      
    // });
    
  }

  openSnackBar(){

  }
}
