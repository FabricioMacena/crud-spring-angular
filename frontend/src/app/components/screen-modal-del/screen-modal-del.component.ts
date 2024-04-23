import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductInterface } from '../../interfaces/product-interfaces';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-screen-modal-del',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './screen-modal-del.component.html',
  styleUrl: './screen-modal-del.component.scss'
})
export class ScreenModalDelComponent implements OnInit{
  @Input("selectedProduct") selectedProduct!: ProductInterface;
  @Output("cancel") cancel = new EventEmitter();

  constructor(private prodService: ProductsService){ }

  ngOnInit(): void {
   console.log(this.selectedProduct.id);
  }

  onSubmit(): void {
    this.prodService.deleteProduct(this.selectedProduct.id).subscribe(
        () => {
          this.cancel.emit();
          window.location.reload();
        }
    ),
    (error: string) => {
      console.error('Erro ao excluir o produto:', error);
    }
  }

  clickCancel(): void {
    this.cancel.emit();
  }
}
