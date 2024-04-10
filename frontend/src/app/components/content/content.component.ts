import { Component } from '@angular/core';
import { FiltersSideComponent } from '../filters-side/filters-side.component';
import { TableSideComponent } from '../table-side/table-side.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    FiltersSideComponent,
    TableSideComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
