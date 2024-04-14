import { config } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class PauseObject extends GameInterface {
    constructor (){
        super();

        this.pauseText;
    };
    create(context) {
        this.pauseText = context.add.text(config.width/2, 35, "Game Pause");
        this.pauseText.setOrigin(0.5, 0.5);
        this.pauseText.visible = false;
    };
    pause(context) {
        this.pauseText.visible = true;
        console.log('pause', this.pauseText);
        context.game.pause();
        
    };
    resume(context) {
        this.pauseText.visible = false; 
        console.log('resume');
    };
};