import { config } from "../config/config";
import { Scene } from "phaser";

export class PausePrefab extends Scene {
    preload () {

    };
    create () {
        this.add.text(config.width/2, 40, "Game Pause", { fontSize: 20 }).setOrigin(0.5, 0.5);
    };
};