import { Component, EventEmitter, input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  product = input<Product | null>(null);

  form!: FormGroup;

  @Output() submit = new EventEmitter<Product>()

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product()?.title || '', { 
        nonNullable: true, 
        validators: Validators.required 
      })
    })
    
  }

  onSubmit(){
    const product = this.form.value as Product;
    this.submit.emit(product);
  }
}
