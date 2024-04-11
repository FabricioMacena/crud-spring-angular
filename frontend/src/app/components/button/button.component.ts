import { Component, Input } from '@angular/core';

type variantButton = 'medium' | 'small';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnText: string = "";
  @Input() variant: variantButton = "medium"
}
