import { getAsset } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class PlayerObject extends GameInterface {
    constructor(velocity, x, y, bulletSpeed=180) {
        super();
        
        this.player;
        this.bullets;
        
        this.playerX = x;
        this.playerY = y;
        this.velocity = velocity;
        
        this.bulletSpeed = bulletSpeed;
        this.bulletsPlayer = 3;
        this.bulletsControl = [];
        this.isShooting = false;

        this.cursor;
    };
    preload(context) {
        context.load.spritesheet('player', getAsset('sprites/spritesheets/ship.png'), { frameWidth: 16, frameHeight: 24 });
        context.load.spritesheet('player_bullet', getAsset('sprites/spritesheets/effects/laser-bolts.png'), { frameWidth: 16, frameHeight: 16 });
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
        context.anims.create({
            key: 'bullet_player',
            frames: [
                {
                    key: 'player_bullet',
                    frame: 2
                },
                {
                    key: 'player_bullet',
                    frame: 3
                }
            ],
            frameRate: 8,
            repeat: -1
        });
        
        this.bullets = context.physics.add.group();

        for (var count = 0; count < this.bulletsPlayer; count++) {
            const bulletObject = this.bullets.create(0, 0, 'player_bullet', 2);
            bulletObject.visible = false;
            this.bulletsControl.push({
                bullet: bulletObject,
                use: false
            });
        };

        this.player = context.physics.add.sprite(this.playerX, this.playerY, 'player');
        this.player.play('idle');
        this.player.setCollideWorldBounds(true);
        
        this.cursor = context.input.keyboard.createCursorKeys();
    };
    update(context, time, delay) {
        for (var index = 0; index < this.bulletsPlayer; index++) {
            const bullet = this.bulletsControl[index];
            if (bullet.bullet.y <= 0) {
                this.resetBullets(bullet);
            };
        };

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

        if (this.cursor.space.isDown && !this.isShooting) {
            this.isShooting = true;
            const bullet = this.canShoot();
            //console.log(bullet);
            if (bullet != false) {
                this.shoot(this.player.x, this.player.y, bullet);
            }else { console.log('cannot shoot!') };
        }else if (this.cursor.space.isUp) {
            this.isShooting = false;
        };
    };
    shoot(x, y, bullet) {
        bullet.use = true;
        
        bullet.bullet.x = x;
        bullet.bullet.y = y;
        
        bullet.bullet.visible = true;
        bullet.bullet.setVelocityY(-this.bulletSpeed);
    };
    resetBullets(bullet) {
        if (bullet.use) {
            bullet.use = false;
            bullet.bullet.setVelocityY(0);
            bullet.bullet.visible = false;
                    
            bullet.bullet.x = 0;
            bullet.bullet.y = 0; 
            return true;
        };
        return false;
        
    };
    canShoot() {
        for (var count = 0; count < this.bulletsPlayer; count++) {
            const bullet = this.bulletsControl[count];
            if (bullet.use) {
                continue;
            };
            return bullet;
        };
        return false;
    };
};