import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-table-side',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './table-side.component.html',
  styleUrl: './table-side.component.scss'
})
export class TableSideComponent {

}
