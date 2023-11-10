/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const triggerButton = document.getElementById("popover-trigger");
  const popoverContainer = document.getElementById("popover-container");
  triggerButton.addEventListener("click", () => {
    togglePopover(triggerButton, popoverContainer);
  });
  document.addEventListener("click", event => {
    if (!popoverContainer.contains(event.target) && event.target !== triggerButton) {
      hidePopover(popoverContainer);
    }
  });
});
const togglePopover = (trigger, popover) => {
  const isVisible = window.getComputedStyle(popover).display !== "none";
  if (isVisible) {
    hidePopover(popover);
  } else {
    showPopover(trigger, popover);
  }
};
const showPopover = (trigger, popover) => {
  popover.style.display = "block";
  const triggerRect = trigger.getBoundingClientRect();
  const popoverRect = popover.getBoundingClientRect();
  const top = triggerRect.top - popoverRect.height - 10;
  const left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
  popover.style.top = `${Math.max(0, top)}px`;
  popover.style.left = `${Math.max(0, left)}px`;
};
const hidePopover = popover => {
  popover.style.display = "none";
};
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;