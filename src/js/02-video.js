import throttle from "lodash.throttle";

const iframe = document.querySelector("#vimeo-player");
const CURRENT_TIME = "videoplayer-current-time";
const player = new Vimeo.Player(iframe);
player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data));
}
const localStorageGet = localStorage.getItem(CURRENT_TIME);
const pars = JSON.parse(localStorageGet);
if (localStorageGet) {
    player.setCurrentTime(pars.seconds);
}