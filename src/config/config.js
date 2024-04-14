import { Game } from '../scenes/Game';

import { AUTO } from 'phaser';

const styleCanvas = "border-radius: 10px; border: solid black 3px;"

export const config = {
    type: AUTO,
    width: 256,
    height: 320,
    parent: 'game',
    canvasStyle: styleCanvas,
    scene: [Game],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

export function getAsset(path) {
    return '../public/assets/game/' + path;
};