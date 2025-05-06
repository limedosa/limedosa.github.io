// import { createPopper } from "@popperjs/core";
// const popcorn = document.querySelector("#popcorn");
// const tooltip = document.querySelector("#tooltip");
// createPopper(popcorn, tooltip, {
//   placement: "top",
// });
// function toggleIframe() {
//   var iframe = document.getElementById("embeddedProject");
//   var iframeContainer = document.getElementById("iframeContainer");
//   var toggleButton = document.getElementById("toggleButton");

//   if (iframe.style.display === "none") {
//       iframe.style.display = "block";
//       toggleButton.textContent = "Hide Embedded Project";
//   } else {
//       iframe.style.display = "none";
//       toggleButton.textContent = "Show Embedded Project";
//   }
// }
var pageTranslation = document.createElement('div');
pageTranslation.id = 'google_translate_element';

document.body.appendChild(pageTranslation);

var googleTranslateScript = document.createElement('script');
googleTranslateScript.type = 'text/javascript';
googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

document.body.appendChild(googleTranslateScript);

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL }, 'google_translate_element');
}