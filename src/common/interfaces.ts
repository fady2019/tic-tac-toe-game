export interface GameMetadataInterface {
  player1Id: string;
  player1Mark: 'o' | 'x';
  player1WinCount: number;
  player2Id: string;
  player2Mark: 'o' | 'x';
  player2WinCount: number;
  tiesCount: number;
}

export interface Move {
  cell: number;
  alpha: number;
  beta: number;
}
