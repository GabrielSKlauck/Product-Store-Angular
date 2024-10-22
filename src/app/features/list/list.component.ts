import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) =>{
      this.products = products;
    });
    
    
  }
}
