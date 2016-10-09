import { Injectable } from '@angular/core';
import { Player } from "./player";

@Injectable()
export class GameService {

  public player1: Player;
  public player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  registerPlayers(name1: string, name2: string): void {
    // debugger;
    this.player1.name = name1;
    this.player2.name = name2;
  }

}