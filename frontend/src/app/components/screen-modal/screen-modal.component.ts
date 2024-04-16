import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screen-modal',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './screen-modal.component.html',
  styleUrl: './screen-modal.component.scss'
})
export class ScreenModalComponent {
  @Output("cancel") cancel = new EventEmitter();

  formData: ProductInterface = {
    name: '',
    amount: NaN,
    price: NaN,
    category: '',
    supplier: ''
  };

  constructor(private prodService: ProductsService){ }

  onSubmit(): void {
    this.prodService.addProduct(this.formData).subscribe(
      (response: ProductInterface) => {
        console.log("Novo produto adicionado: ", response);
        this.cancel.emit();
        window.location.reload();
      }
    ),
    (error: string) => {
      console.log("Erro ao adicionar o novo produto.", error)
    }
  }

  clickCancel(): void {
    this.cancel.emit();
  }
}
