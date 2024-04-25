import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonFilterComponent } from '../button-filter/button-filter.component';

@Component({
  selector: 'app-filters-side',
  standalone: true,
  imports: [NgFor, ButtonFilterComponent],
  templateUrl: './filters-side.component.html',
  styleUrl: './filters-side.component.scss'
})
export class FiltersSideComponent {
  @Input("categories") categories!: string[];

  selectedCategories: string[] = [];
  @Output("categoriesSelected") categoriesSelected = new EventEmitter<string[]>();

  toggleCategory(category: string): void {
    if (this.selectedCategories.includes(category)) {
      this.selectedCategories = this.selectedCategories.filter(c => c !== category);
    } else {
      this.selectedCategories.push(category);
    }

    this.categoriesSelected.emit([...this.selectedCategories]);
  }
}
