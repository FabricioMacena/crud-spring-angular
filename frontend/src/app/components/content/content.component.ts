import { Component, OnInit } from '@angular/core';
import { FiltersSideComponent } from '../filters-side/filters-side.component';
import { TableSideComponent } from '../table-side/table-side.component';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../interfaces/product-interfaces';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    FiltersSideComponent,
    TableSideComponent],
  providers: [ProductsService],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  products!: ProductInterface[];

  constructor(private prodService: ProductsService){}

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(
      response => this.products = response
    )
  }

}
