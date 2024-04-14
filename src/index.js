import { Game } from 'phaser';
import { config } from './config/config';

import { PausePrefab } from './prefab/PausePrefab';

const game = new Game(config);

const keySceneHasPause = 'Game';
var gamePause = false;

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        /*if (!game.scene.isActive(keySceneHasPause)) {
            console.log('block');
            return;
        };*/
        const scene = game.scene.keys[keySceneHasPause];
        gamePause =! gamePause;
        switch (gamePause) {
            case true:
                scene.scene.add('pause', PausePrefab, true, { x: 0, y: 0 });
                scene.scene.setActive(false, 'Game');
                break;
            case false:
                scene.scene.setActive(true, 'Game');
                scene.scene.remove('pause');
        };
    };
});