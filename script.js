// ==UserScript==
// @name        aparat.com
// @namespace   Violentmonkey Scripts
// @match       https://www.aparat.com/
// @grant       none
// @version     1.0
// @author      -
// @description 9/8/2023, 9:33:30 AM
// ==/UserScript==







setInterval(()=>{
  document.querySelector('iframe[srcdoc]')?.remove()
  document.querySelector('div[id="sideAds"]')?.remove()
  document.querySelector('div[id="listWrapperBanner"]')?.remove()
  document.querySelector('a[class="promote-puls"]')?.remove()
  if(document.querySelector('div[class*=vast-ad]')){
    document.querySelector('video').currentTime=document.querySelector('video').duration
  }
},500)

