import { getAsset } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class PlayerObject extends GameInterface {
    constructor() {
        super();
        
        this.player;
        this.cursor
    };
    preload(context) {
        context.load.spritesheet('player-ship', getAsset('sprites/spritesheets/ship.png'), { frameWidth: 16, frameHeight: 24 });
    };
    create(context) {
        context.anims.create({
            key: 'left',
            frames: [
                {
                    key: 'player-ship',
                    frame: 2
                },
                {
                    key: 'player-ship',
                    frame: 1
                },
                {
                    key: 'player-ship',
                    frame: 0
                }
            ],
            frameRate: 10,
            repeat: 1
        });
        context.anims.create({
            key: 'right',
            frames: [
                {
                    key: 'player-ship',
                    frame: 2
                },
                {
                    key: 'player-ship',
                    frame: 3
                },
                {
                    key: 'player-ship',
                    frame: 4
                }
            ],
            frameRate: 10,
            repeat: 1
        });
        this.player = context.add.sprite(16, 24, 'player-ship', 3);
        this.cursor = context.input.keyboard.createCursorKeys();
    };
    update(context, time, delay) {
        if (this.cursor.left.isDown) {
            this.player.play('left', true);
        }else if (this.cursor.right.isDown && !this.side) {
            this.player.play('right', true);
        };
    };
};