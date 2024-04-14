import { config } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class PauseObject extends GameInterface {
    constructor (){
        super();

        this.pauseText;

        this.gamePause = false;
    };
    preload(context) {

    };
    create(context) {
        this.pauseText = context.add.text(config.width/2, 35, "Game Pause");
        this.pauseText.setOrigin(0.5, 0.5);
        this.pauseText.visible = false;

        context.input.keyboard.addKey('ESCAPE');
        console.log(context.input.keyboard.keys['ESCAPE']);
    };
    update(context, time, delta) {
        if (this.gamePause) {
            this.gamePause = false;
        } else if (!this.gamePause) {
            this.gamePause = true;
        };
    };
};