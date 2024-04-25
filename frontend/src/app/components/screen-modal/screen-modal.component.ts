import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductInterface } from '../../interfaces/product-interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-screen-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule, NgFor],
  templateUrl: './screen-modal.component.html',
  styleUrl: './screen-modal.component.scss'
})
export class ScreenModalComponent implements OnInit {
  @Output("cancel") cancel = new EventEmitter();
  @Input("isEditMode") isEditMode?: boolean;
  @Input("selectedProduct") selectedProduct!: ProductInterface;
  @Input("categories") categories!: string[];

  constructor(private prodService: ProductsService){ }

  formData!: ProductInterface;

  ngOnInit(): void {
    if (this.selectedProduct && this.isEditMode){
      this.formData = { ...this.selectedProduct}
    } else {
      this.formData = {
        id: '`${string}-${string}-${string}-${string}-${string}`',
        name: '',
        amount: NaN,
        price: NaN,
        category: '',
        supplier: ''
      }
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.selectedProduct){
      this.prodService.updateProduct(this.selectedProduct.id, this.formData).subscribe(
        () => {
          this.cancel.emit();
          window.location.reload();
        }
      )
    } else {
      this.prodService.addProduct(this.formData).subscribe(
        () => {
          this.cancel.emit();
          window.location.reload();
        }
      ),
      (error: string) => {
        console.log("Erro ao adicionar o novo produto.", error);
      }
    }
  }

  clickCancel(): void {
    this.cancel.emit();
  }
}
