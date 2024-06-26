import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ScreenModalComponent } from '../screen-modal/screen-modal.component';
import { ProductInterface } from '../../interfaces/product-interfaces';
import { ScreenModalDelComponent } from '../screen-modal-del/screen-modal-del.component';

@Component({
  selector: 'app-table-side',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ButtonComponent,
    ScreenModalComponent,
    ScreenModalDelComponent
  ],
  templateUrl: './table-side.component.html',
  styleUrl: './table-side.component.scss'
})
export class TableSideComponent implements OnInit{
  @Input("products") products!: ProductInterface[];
  @Input("selectedCategories") selectedCategories!: string[];
  @Input("categories") categories!: string[];

  isScreenActive: boolean = false;
  isDelScreenActive: boolean = false;
  selectedProduct?: ProductInterface;
  isEditMode: boolean = false;

  filteredProducts: ProductInterface[] = [];

  ngOnInit() {
    this.filterProducts();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategories']) {
      this.filterProducts();
    }
  }

  filterProducts(): void {
    if (!this.selectedCategories || this.selectedCategories.length === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product =>
        this.selectedCategories.includes(product.category)
      );
    }
  }

  editProduct(product: ProductInterface): void {
    this.isEditMode = true;
    this.selectedProduct = { ...product };
    this.toggleScreenVisible();
  }

  deleteProduct(product: ProductInterface): void {
    this.selectedProduct = { ...product };
    this.toggleDelScreenVisible();
  }

  addProduct(): void {
    this.isEditMode = false;
    this.toggleScreenVisible();
  }

  toggleDelScreenVisible(): void {
    this.isDelScreenActive = !this.isDelScreenActive
  }

  toggleScreenVisible(): void{
    this.isScreenActive = !this.isScreenActive;
  }
}
