import { getAsset } from "../config/config";
import { GameInterface } from "../interfaces/GameInterface";

export class BackgroundObject extends GameInterface {
    constructor(backgroundType, velocity=50, hasBlur=false) {
        super();
        
        this.backgroundType = backgroundType;
        this.background;
        this.hasBlur = hasBlur;
        
        this.velocity = velocity;
        this.offset;
        this.scroll;
    };
    preload(context) {
        context.load.image('background-river', getAsset('sprites/backgrounds/river/background.png'));
        context.load.image('background-desert', getAsset('sprites/backgrounds/desert/background.png'));
    };
    create (context) {
        this.background = context.add.tileSprite(0, 0, 256, 320*2, 'background-' + this.backgroundType);
        this.background.setOrigin(0, 0);

        if (this.hasBlur) {
            this.background.initPostPipeline();
            this.background.postFX.addBlur(0, 2, 2, 0.5);
        };
    };
    update (context, time, delta) {
        this.offset = this.velocity * delta/1000;
        this.background.y -= this.offset;
        this.scroll = Math.abs(parseInt(this.background.y - this.offset)/320);
        if (Number.isInteger(this.scroll)){
            this.background.height += 320;
            //console.log('reapet', this.scroll);
        };
    };
    getObjects() {
        return { 'background': this.background };
    };
};