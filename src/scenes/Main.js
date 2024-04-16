import { config } from '../config/config';
import { Scene } from 'phaser';

import { BackgroundObject } from '../objects/BackgroundObject';

export class Main extends Scene {
    constructor (){
        super({ key: 'Main' })

        this.background = new BackgroundObject('river', 30, true);
    };
    preload() {
        this.background.preload(this)
    };
    create() {
        this.background.create(this);

        this.title = this.add.text(config.width/2, 40, "PhaserShooter", {
            fontSize: 20,
            fontStyle: 'bold'
        });
        this.title.setOrigin(0.5, 0.5);
        
        this.startText = this.add.text(config.width/2, config.height - 40, "click SPACE to start!", { fontStyle: 'bold' });
        this.startText.setOrigin(0.5, 0.5);
        this.startText.scale = 0.8
        
        this.tweens.add({
            targets: this.startText,
            scale: 1,
            ease: 'Power1',
            duration: 2000,
            yoyo: true,
            loop: -1
        });

        this.cursor = this.input.keyboard.createCursorKeys();
    };
    update(time, delta) {
        this.background.update(this, time, delta);

        if (this.cursor.space.isDown) {
            this.scene.start('Game');
        };
    };
};