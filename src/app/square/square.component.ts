import { Component, Input } from '@angular/core';
import { Player } from '../app.component';

@Component({
  selector: 'app-square',
  template: `
    <button
      [status]="value === 'X' ? 'success' : 'O' === value ? 'info' : 'primary'"
      nbButton
      filled
    >
      {{ value }}
    </button>
  `,
  styles: ['button[nbButton] { width: 100%; height: 100%; font-size: 5em; }'],
})
export class SquareComponent {
  @Input() value: Player = '';
}
