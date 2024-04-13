import { Game } from '../scenes/Game';

export const config = {
    type: 1,
    width: 256,
    height: 320,
    parent: 'game',
    scene: [Game]
};

export function getAsset(path) {
    return '../public/assets/game/' + path;
};