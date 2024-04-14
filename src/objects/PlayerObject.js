import { getAsset } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class PlayerObject extends GameInterface {
    constructor(velocity, x, y) {
        super();
        
        this.player;
        
        this.playerX = x;
        this.playerY = y;
        this.velocity = velocity;
        
        this.cursor;
    };
    preload(context) {
        context.load.spritesheet('player', getAsset('sprites/spritesheets/ship.png'), { frameWidth: 16, frameHeight: 24 });
    };
    create(context) {
        context.anims.create({
            key: 'idle',
            frames: [
                {
                    key: 'player',
                    frame: 0
                },
                {
                    key: 'player',
                    frame: 1  
                }
            ],
            frameRate: 8,
            repeat: -1
        });
        
        this.player = context.physics.add.sprite(this.playerX, this.playerY, 'player');
        this.player.play('idle');
        this.player.setCollideWorldBounds(true);
        
        this.cursor = context.input.keyboard.createCursorKeys();
    };
    update(context, time, delay) {
        if (this.cursor.left.isDown) {
            this.player.setVelocityX(-this.velocity);
        }else if (this.cursor.right.isDown) {
            this.player.setVelocityX(this.velocity);
        }else {
            this.player.setVelocityX(0);
        };

        if (this.cursor.up.isDown) {
            this.player.setVelocityY(-this.velocity);
        }else if (this.cursor.down.isDown) {
            this.player.setVelocityY(this.velocity)
        }else {
            this.player.setVelocityY(0);
        };
    };
};