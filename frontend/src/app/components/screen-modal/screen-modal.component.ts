import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { ProductInterface } from '../../interfaces/product-interfaces';

@Component({
  selector: 'app-screen-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './screen-modal.component.html',
  styleUrl: './screen-modal.component.scss'
})
export class ScreenModalComponent implements OnInit {
  @Output("cancel") cancel = new EventEmitter();
  @Input("isEditMode") isEditMode?: boolean;
  @Input("selectedProduct") selectedProduct?: ProductInterface | null;

  formData!: ProductInterface;

  ngOnInit(): void {

    console.log(this.selectedProduct);

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

  constructor(private prodService: ProductsService){ }

  onSubmit(): void {

    console.log(this.formData);

    if (this.isEditMode && this.selectedProduct){
      this.prodService.updateProduct(this.selectedProduct.id, this.formData).subscribe(
        (response: ProductInterface) => {
          this.cancel.emit();
          window.location.reload();
        }
      )
    } else {
      this.prodService.addProduct(this.formData).subscribe(
        (response: ProductInterface) => {
          this.cancel.emit();
          window.location.reload();
        }
      ),
      (error: string) => {
        console.log("Erro ao adicionar o novo produto.", error)
      }
    }
  }

  clickCancel(): void {
    this.cancel.emit();
  }
}
