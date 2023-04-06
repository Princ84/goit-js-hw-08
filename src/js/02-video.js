import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframeEl = document.querySelector('iframe');
const player = new Player(iframeEl);

const PLAYER_CURRENT_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
   
  localStorage.setItem(PLAYER_CURRENT_KEY, seconds);
 }

const savedData = localStorage.getItem(PLAYER_CURRENT_KEY);
if (savedData) {
  player.setCurrentTime(savedData);
}
