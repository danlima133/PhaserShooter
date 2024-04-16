import { config, getAsset } from "../config/config";
import { Scene, Geom } from "phaser";

export class PausePrefab extends Scene {
    constructor () {
        super();
        
        this.buttonTry;
    };
    preload () {
        /*this.load.image('buttontryDefault', getAsset('sprites/ui/buttons/try/default.png'));
        this.load.image('buttontryHover', getAsset('sprites/ui/buttons/try/hover.png'));*/
    };
    create () {
        this.add.text(config.width/2, 40, "Game Pause", { fontSize: 20 }).setOrigin(0.5, 0.5);
        
        /*this.buttonTry = this.add.sprite(config.width/2, config.height - 60, 'buttontryDefault');
        this.buttonTry.scale = 0.6;
        this.buttonTry.setInteractive(Geom.Circle(0, 0, 5), function () {
            console.log('click');
        });*/
    };
};