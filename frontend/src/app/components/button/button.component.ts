import { Component, EventEmitter, Input, Output } from '@angular/core';

type variantBtns = "medium" | "small";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input('btn-text') btnText: string = "";
  @Input('variant') variant: variantBtns = "medium";
}
