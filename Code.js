/** 
 * Make YouTube URL: Insert YouTube URL with specific time marker and custom text
 * Creator: Wanda Terral
 * License: MIT
 * Website: https://github.com/wterral/makeyoutubeurl
 */

function onOpen() {
  DocumentApp.getUi().createAddonMenu()
                     .addItem('Open Make YouTube URL Wizard', 'showVidDialog')
                     .addItem('About', 'showAbout')
                     .addToUi();
}
