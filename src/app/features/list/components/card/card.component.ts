import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { Product } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<Product>()

  productTitle = computed(() => this.product().title);
}
