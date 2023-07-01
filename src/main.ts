// src/main.js
import {updateTextElements,} from "./modules/update-text-elements";
import {startPlayback} from "./modules/start-playback";
import * as config from "./config";
import App from "./App.svelte";

const global = window as any;

global.disableBuiltinAnimations = config.disableBuiltinAnimations;
global.transparentBackground = config.transparentBackground;
global.disableBuiltinClose = config.disableBuiltinClose;

global.updateTextElements = updateTextElements;
global.startPlayback = startPlayback;

global.injectdata = JSON.parse(JSON.stringify(config.injectdata));

//We have to use this function because we should show two pages from one Git-Repository "index.html" and "index_nonorganic.html"
const app = new App({
  target: document.body,
})

export default app
