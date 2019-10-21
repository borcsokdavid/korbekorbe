"use strict";
let mozgat = function() {};
    let elem = document.getElementById("animate");
    let elem_1 = document.getElementById("animate1");
    let elem_2 = document.getElementById("animate2");
    let elem_3 = document.getElementById("animate3");
let pos_1 = 0;
let pos_2 = 0;
let ertek_1 = 0;
let ertek_2 = 0;
let mozgat_1 = 0;
let mozgat_2 = 0;



function mystop(){
    window.clearInterval(mozgat);
    if (mozgat_1 > 0) {
        pos_2 = 1400 - ertek_1;
        mozgat_1 = 0;
    } else if (mozgat_2 >0){
        pos_1 = 1400 - ertek_2;
        mozgat_2 = 0;
    }
    
    
}

function mymoveleft(){
    mozgat_1++;
    
    mozgat = window.setInterval(frame, 5);


function frame() {
     ertek_1 = pos_1 % 1400;
    if (ertek_1 < 350) {
        pos_1 ++;
        topleft(-1, 0, 350, ertek_1);
      


    } else if (ertek_1 < 700) {
        pos_1 ++;
        lefttop(-1, 350, 700, ertek_1);
      
    }



    else if (ertek_1 < 1050) {
        pos_1 ++;
        topleft(1, 1050, 700, ertek_1);
        
    }



    else if (ertek_1 < 1400) {
        pos_1 ++;
        lefttop(1, 1400, 1050, ertek_1);
        
    }

    else{
        
    
    
    }
    } 
}

function mymoveright(){
    mozgat_2++;
    mozgat = window.setInterval(frame, 5);


function frame() {
     ertek_2 = pos_2 % 1400;
    if (ertek_2 < 350) {
        pos_2 ++;
        lefttop(-1, 0, 350, ertek_2);
        } 
    
    else if (ertek_2 < 700) {
        pos_2 ++;
        topleft(-1, 350, 700, ertek_2);
        }


    else if (ertek_2 < 1050) {
        pos_2 ++;
        lefttop(1, 1050, 700, ertek_2);
        }



    else if (ertek_2 < 1400) {
        pos_2 ++;
        topleft(1, 1400, 1050, ertek_2);
       
    }
}
}

function topleft(elojel, a, b, ertek) {
        elem.style.top = `${elojel * (a - ertek)}px`;
        elem_1.style.left = `${elojel * (a - ertek)}px`;
        elem_2.style.top = `${elojel * (ertek - b)}px`;
        elem_3.style.left = `${elojel * (ertek - b)}px`;

}

function lefttop(elojel, a, b, ertek) {
        elem.style.left = `${elojel * (a - ertek)}px`;
        elem_1.style.top = `${elojel * (ertek - b)}px`;
        elem_2.style.left = `${elojel * (ertek - b)}px`;
        elem_3.style.top = `${elojel * (a - ertek)}px`;

}