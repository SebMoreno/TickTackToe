import { Component, OnInit, TrackByFunction } from '@angular/core';
import { Player } from '../app.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  squares!: Player[];
  winner!: Player;
  isXNext!: boolean;

  get player() {
    return this.isXNext ? 'X' : 'O';
  }

  constructor() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill('');
    this.winner = '';
    this.isXNext = true;
  }

  makeMove(i: number) {
    this.squares[i] = this.player;
    this.isXNext = !this.isXNext;
    this.winner = this.calculateWinner();
  }

  calculateWinner(): Player {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }

  trackBy() {
    return null;
  }
}
