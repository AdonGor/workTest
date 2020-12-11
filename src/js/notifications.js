

import '@pnotify/core/dist/PNotify.css';
import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, senpai!'
});