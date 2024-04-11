import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table-side',
  standalone: true,
  imports: [ButtonComponent, NgFor],
  providers: [ProductsService],
  templateUrl: './table-side.component.html',
  styleUrl: './table-side.component.scss'
})
export class TableSideComponent implements OnInit{

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
}
