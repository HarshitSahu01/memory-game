import click from './click.wav';
import fallback from './fallback.wav';
import bonus from './bonus.wav';
import win from './win.wav';

const AudioFiles = {
    click: new Audio(click),
    fallback:new Audio(fallback),
    bonus:new Audio(bonus),
    win:new Audio(win)
}

export default AudioFiles;