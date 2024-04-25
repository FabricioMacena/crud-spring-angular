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
  categories: string[] = [];
  selectedCategories: string[] = [];

  constructor(private prodService: ProductsService){}

  ngOnInit(): void {
    this.prodService.getAllProducts().subscribe(
      response => this.products = response
    )
    this.prodService.getCategories().subscribe(
      response => this.categories = response
    )
  }

  receiveSelectedCategories(categories: string[]): void {
    this.selectedCategories = categories;
  }
}
