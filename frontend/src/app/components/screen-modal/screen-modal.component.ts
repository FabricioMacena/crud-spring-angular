import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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

  emptyData: ProductInterface = {
    id: '`${string}-${string}-${string}-${string}-${string}`',
    name: '',
    amount: NaN,
    price: NaN,
    category: '',
    supplier: ''
  };
  formData: ProductInterface = { ...this.emptyData };

  ngOnInit(): void {
    if (this.selectedProduct && this.isEditMode){
      this.formData = { ...this.selectedProduct};
    } else {
      this.formData = { ...this.emptyData};
    }
  }

  onSubmit(): void {
    if (this.isEditMode && this.selectedProduct){
      this.prodService.updateProduct(this.selectedProduct.id, this.formData).subscribe(
        () => {
          this.clickCancel();
        }
      )
    } else {
      this.prodService.addProduct(this.formData).subscribe(
        () => {
          this.clickCancel();
        }
      ),
      (error: string) => {
        console.log("Erro ao adicionar o novo produto.", error);
      }
    }
  }

  clickCancel(): void {
    if (this.isEditMode){ this.isEditMode = !this.isEditMode; }
    this.cancel.emit();
    window.location.reload();
  }
}
