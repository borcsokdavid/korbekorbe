"use strict";
let mozgat = function() {};
    let elem = document.getElementById("animate");
    let elem_1 = document.getElementById("animate1");
    let elem_2 = document.getElementById("animate2");
    let elem_3 = document.getElementById("animate3");
let pos = 0;
let ertek = 0;
function mystop(){
    window.clearInterval(mozgat);
}

function mymoveleft(){
    
    

mozgat = window.setInterval(frame, 5);


function frame() {
     ertek = pos % 1400;
    if (ertek < 350) {
        pos ++;
        topleft(-1, 0, 350);
        /*elem.style.top = `${ertek}px`;
        elem_1.style.left = `${ertek}px`;
        elem_2.style.top = `${350 -  ertek}px`;
        elem_3.style.left = `${350 -  ertek}px`;*/
    } else if (ertek < 700) {
        pos ++;
        lefttop(-1, 350, 700);
      /*elem.style.left = `${ertek - 350}px`;
      elem_1.style.top = `${700 - ertek}px`;
      elem_2.style.left = `${700 - ertek}px`;
      elem_3.style.top = `${ertek - 350}px`;*/
    }

    else if (ertek < 1050) {
        pos ++;
        topleft(1, 1050, 700);
        /*elem.style.top = `${1050 - ertek}px`;
        elem_1.style.left = `${1050 - ertek}px`;
        elem_2.style.top = `${ertek - 700}px`;
        elem_3.style.left = `${ertek - 700}px`;*/
    }
    else if (ertek < 1400) {
        pos ++;
        lefttop(1, 1400, 1050);
        /*elem.style.left = `${1400 - ertek}px`;
        elem_1.style.top = `${ertek - 1050}px`;
        elem_2.style.left = `${ertek - 1050}px`;
        elem_3.style.top = `${1400 - ertek}px`; */
    }

    else{
        
    
    
    }
    } 
}

function mymoveright(){
    mozgat = window.setInterval(frame, 5);


function frame() {
     ertek = pos % 1400;
    if (ertek < 350) {
        pos ++;
        lefttop(-1, 0, 350);
        /*elem.style.top = `${ertek}px`;
        elem_1.style.left = `${ertek}px`;
        elem_2.style.top = `${350 -  ertek}px`;
        elem_3.style.left = `${350 -  ertek}px`;*/
    } else if (ertek < 700) {
        pos ++;
        topleft(-1, 350, 700);
      /*elem.style.left = `${ertek - 350}px`;
      elem_1.style.top = `${700 - ertek}px`;
      elem_2.style.left = `${700 - ertek}px`;
      elem_3.style.top = `${ertek - 350}px`;*/
    }

    else if (ertek < 1050) {
        pos ++;
        lefttop(1, 1050, 700);
        /*elem.style.top = `${1050 - ertek}px`;
        elem_1.style.left = `${1050 - ertek}px`;
        elem_2.style.top = `${ertek - 700}px`;
        elem_3.style.left = `${ertek - 700}px`;*/
    }
    else if (ertek < 1400) {
        pos ++;
        topleft(1, 1400, 1050);
        /*elem.style.left = `${1400 - ertek}px`;
        elem_1.style.top = `${ertek - 1050}px`;
        elem_2.style.left = `${ertek - 1050}px`;
        elem_3.style.top = `${1400 - ertek}px`; */
    }
}
}

function topleft(elojel, a, b) {
        elem.style.top = `${elojel * (a - ertek)}px`;
        elem_1.style.left = `${elojel * (a - ertek)}px`;
        elem_2.style.top = `${elojel * (ertek - b)}px`;
        elem_3.style.left = `${elojel * (ertek - b)}px`;

}

function lefttop(elojel, a, b) {
        elem.style.left = `${elojel * (a - ertek)}px`;
        elem_1.style.top = `${elojel * (ertek - b)}px`;
        elem_2.style.left = `${elojel * (ertek - b)}px`;
        elem_3.style.top = `${elojel * (a - ertek)}px`;

}