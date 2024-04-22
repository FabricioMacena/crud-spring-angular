import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ScreenModalComponent } from '../screen-modal/screen-modal.component';
import { ProductInterface } from '../../interfaces/product-interfaces';

@Component({
  selector: 'app-table-side',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    ButtonComponent,
    ScreenModalComponent
  ],
  providers: [ProductsService],
  templateUrl: './table-side.component.html',
  styleUrl: './table-side.component.scss'
})
export class TableSideComponent implements OnInit{

  isScreenActive: boolean = false;
  selectedProduct: ProductInterface | null = null;
  isEditMode: boolean = false;

  products?: ProductInterface[];

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(
      (response) => this.products = response
    ),
    (error: string) => {
      console.log("ocorreu um erro na requisição getAll." + error);
    }
  }

  editProduct(product: ProductInterface): void {
    this.isEditMode = true;
    this.selectedProduct = { ...product };
    this.toggleScreenVisible();
  }

  addProduct(): void {
    this.isEditMode = false;
    this.selectedProduct = null;
    this.toggleScreenVisible();
  }

  toggleScreenVisible(): void{
    this.isScreenActive = !this.isScreenActive;
  }
}
