/** 
 * Make YouTube URL: Insert YouTube URL with specific time marker and custom text
 * Creator: Wanda Terral
 * License: MIT
 * Website: https://github.com/wterral/makeyoutubeurl
 */

function onOpen() {
  DocumentApp.getUi().createAddonMenu()
                     .addItem('Get document link', 'showDocDialog')
                     .addItem('Shorten selected URL', 'showSelectedDialog')
                     .addItem('Shorten and replace selected URL', 'shortenAndReplace')
                     .addToUi();
}
