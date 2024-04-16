import { config } from '../config/config';
import { Scene } from 'phaser';

export class GameOverPrefab extends Scene {
    constructor () {
        super();
        
        this.textGameOver;
        this.textScore;
        
        this.playerScore;
    };

    init(data) {
        this.playerScore = data['player']['score'];
    };
    create() {
       this.textGameOver = this.add.text(config.width/2, 40, "Game Over", { fontSize: 20, fontStyle: 'bold' });
       this.textGameOver.setOrigin(0.5, 0.5);

       this.textScore = this.add.text(config.width/2, 56, "Score: " + this.playerScore);
       this.textScore.setOrigin(0.5, 0.5);
    };
};