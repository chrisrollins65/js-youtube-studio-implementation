const {init, setEndScreen, endScreen, getVideo} = require('youtube-studio');

const SID = '...';
const HSID = '...';
const SSID = '...';
const APISID = '...';
const SAPISID = '...';
const LOGIN_INFO = '...';

const VIDEO_ID = 'F3pnhaBpWdQ';
const CHANNEL_ID = 'UC5pdigr--K7hG24k6z8d0_Q';

(async () => {

  await init({
    SID,
    HSID,
    SSID,
    APISID,
    SAPISID,
    LOGIN_INFO
  });


  console.log('STARTING');
  const videosResult = await getVideo(VIDEO_ID);
  console.log(JSON.stringify(videosResult, null, 4));

  const video = videosResult.videos[0];
  const fifteenSecondsBeforeEnd = (video.lengthSeconds - 15) * 1000;

  const result = await setEndScreen(videoId, fifteenSecondsBeforeEnd, [
    {...endScreen.POSITION_TOP_RIGHT, ...endScreen.TYPE_SUBSCRIBE(CHANNEL_ID)}, // subscribe button
    {...endScreen.POSITION_BOTTOM_LEFT, ...endScreen.TYPE_BEST_FOR_VIEWERS, ...endScreen.DELAY(500)}, // best for viewers delayed with 0.5 sec
    {...endScreen.POSITION_BOTTOM_RIGHT, ...endScreen.TYPE_RECENT_UPLOAD, ...endScreen.DELAY(1000)} // playlist delayed with 1 sec
  ]);

  console.log(result);
})();
