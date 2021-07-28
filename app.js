'use strict';

/* Horizontal Slider */

const horizontalSliderLine = document.querySelector("#horizontal-slider__line");

let leftOffset = 0;

document.querySelector("#horizontal-slider__leftBtn").addEventListener("click", () => {
    leftOffset -= 200;
    if(leftOffset < 0){ leftOffset = 400 };
    horizontalSliderLine.style.left = -leftOffset + "px";
});

document.querySelector("#horizontal-slider__rightBtn").addEventListener("click", () => {
    leftOffset += 200;
    if(leftOffset > 400){ leftOffset = 0 };
    horizontalSliderLine.style.left = -leftOffset + "px";
});

/* Vertical Slider */

const verticalSliderLine = document.querySelector("#vertical-slider__line");

let topOffset = 0;

document.querySelector("#vertical-slider__upBtn").addEventListener("click", () => {
    topOffset -= 200;
    if(topOffset < 0){ topOffset = 400 };
    verticalSliderLine.style.top = -topOffset + "px";
});

document.querySelector("#vertical-slider__downBtn").addEventListener("click", () => {
    topOffset += 200;
    if(topOffset > 400){ topOffset = 0 };
    verticalSliderLine.style.top = -topOffset + "px";
});