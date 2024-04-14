import { config } from '../config/config';
import { Scene, Math } from 'phaser';

import { BackgroundObject } from '../objects/BackgroundObject';
import { PlayerObject } from '../objects/PlayerObject';

var randomValue = 0;

export class Game extends Scene {
    constructor() {
        super({ key: 'Game' });
        
        this.background = new BackgroundObject(getBackgroundType(), 30);
        this.player = new PlayerObject(80, config.width/2, config.height -50);
    };
    preload() {
        this.background.preload(this);
        this.player.preload(this);
    };
    create() {
        this.background.create(this);
        this.player.create(this);
    };
    update(time, delta) {
        this.background.update(this, time, delta);
        this.player.update(this, time, delta)
    };
};

function getBackgroundType() {
    randomValue = Math.Between(1, 10);
    if (randomValue > 5){
        return 'river';
    };
    return 'desert';
};