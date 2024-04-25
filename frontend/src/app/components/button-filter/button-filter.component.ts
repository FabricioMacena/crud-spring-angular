import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-filter',
  standalone: true,
  imports: [],
  templateUrl: './button-filter.component.html',
  styleUrl: './button-filter.component.scss'
})
export class ButtonFilterComponent {
  @Input('label') label: string = '';
  @Output('toggle') toggle = new EventEmitter<boolean>();

  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
    this.toggle.emit(this.isActive);
  }
}
