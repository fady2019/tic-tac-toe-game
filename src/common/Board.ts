export class Board {
  board: string[][];

  constructor(board?: string[][]) {
    if (!board) {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    } else {
      this.board = board;
    }
  }

  clone(): Board {
    return new Board(JSON.parse(JSON.stringify(this.board)));
  }

  get(row: number, col: number): string {
    return this.board[row][col];
  }

  getByCell(cell: number): string {
    return this.get(Math.floor(cell / 3), cell % 3);
  }

  set(row: number, col: number, val: string): void {
    this.board[row][col] = val;
  }

  setByCell(cell: number, val: string): void {
    this.set(Math.floor(cell / 3), cell % 3, val);
  }

  isFull(): boolean {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.board[row][col] === '') {
          return false;
        }
      }
    }

    return true;
  }

  checkRows() {
    let cells: number[] = [];

    for (let row = 0; row < 3; row++) {
      const check =
        this.board[row][0] !== '' &&
        this.board[row][0] === this.board[row][1] &&
        this.board[row][1] === this.board[row][2];

      if (check) {
        for (let col = 0; col < 3; col++) {
          cells.push(this.board[row].length * row + col);
        }

        break;
      }
    }

    return cells.length === 0 ? null : cells;
  }

  checkCols() {
    let cells: number[] = [];

    for (let col = 0; col < 3; col++) {
      const check =
        this.board[0][col] !== '' &&
        this.board[0][col] === this.board[1][col] &&
        this.board[1][col] === this.board[2][col];

      if (check) {
        for (let row = 0; row < 3; row++) {
          cells.push(this.board[row].length * row + col);
        }

        break;
      }
    }

    return cells.length === 0 ? null : cells;
  }

  checkDiagonals() {
    let check =
      this.board[0][0] !== '' &&
      this.board[0][0] === this.board[1][1] &&
      this.board[1][1] === this.board[2][2];

    if (check) {
      return [0, 4, 8];
    }

    check =
      this.board[2][0] !== '' &&
      this.board[2][0] === this.board[1][1] &&
      this.board[1][1] === this.board[0][2];

    if (check) {
      return [6, 4, 2];
    }

    return null;
  }

  checkState() {
    const check = this.checkRows() || this.checkCols() || this.checkDiagonals();

    if (check) {
      return check;
    }

    if (this.isFull()) {
      return [];
    }

    return check;
  }
}
