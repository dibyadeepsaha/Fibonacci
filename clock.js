/* MIT License - Copyright (c) 2020 - Dibyadeep Saha */

var d = new Date();
var hrs = 0, mins = 0;
var firstHour = d.getHours(), firstMinute = d.getMinutes(), firstTime = true;
var setHours = function(h, m) { 
switch (h) {
    case 0:
        $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").addClass("gray-square");
        // TO DO: Add the gray class for remaining squares.
        if (m > 0 && m <= 5) {
        $("#small-square-two").addClass("blue-square");
        }

        else if (m > 5 && m <= 10) {
        $("#small-square-one, #small-square-two").addClass("blue-square");
        }

        else if (m > 10 && m <= 15) {
        $("#small-square-one, #medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        $("#small-square-one, #small-square-two, #medium-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        $("#small-square-one, #largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        $("#small-square-one, #small-square-two, #largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        $("#small-square-one, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        $("#medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        }
        break;

    case 1:
        resetColors();
        $("#small-square-one").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #largest-square").addClass("green-square");
        $("#small-square-one").addClass("red-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) { 
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#medium-square").addClass("red-square");
        }
        break;

    case 2:
        resetColors();
        $("#medium-square").addClass("red-square");

        if (m > 0 && m <= 5){
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 &&  m <= 25) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("blue-square");
        $("#medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square").addClass("red-square");
        }
        break;
    
    case 3:
        resetColors();
        $("#large-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square, #largest-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square").addClass("red-square");
        }
        break;

    case 4:
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square, #small-square-two").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#largest-square").addClass("red-square");
        }
        break;

    case 5:
        resetColors();
        $("#largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        $("#small-square-two, #large-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #largest-square").addClass("red-square");
        }
        break;

    case 6:
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square, #small-square-two, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if(m > 55 && m <= 59) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        }
        break;

    case 7:
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("blue-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("blue-square");
        $("#small-square-one, #small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        $("#small-square-two, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        }
        break;

    case 8:
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        $("#medium-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 9:
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 10:
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#medium-square, #largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#small-square-two, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 11:
        resetColors();
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one").addClass("blue-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #large-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one, #medium-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 12:
        resetColors();
        $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        $("#small-square-two").addClass("blue-square");
        }

        else if (m > 5 && m <= 10) {
        $("#small-square-one, #small-square-two").addClass("blue-square");
        }

        else if (m > 10 && m <= 15) {
        $("#small-square-one, #medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        $("#small-square-one, #small-square-two, #medium-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        $("#small-square-one, #largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        $("#small-square-one, #small-square-two, #largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        $("#small-square-one, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        $("#medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        }
        break;
    // TO BE CONTINUED FROM BELOW - #medium-square
    case 13:
        resetColors();
        $("#small-square-one").addClass("red-square");

        if (m > 0 && m <= 5) {
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #largest-square").addClass("green-square");
        $("#small-square-one").addClass("red-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#medium-square").addClass("red-square");
        }
        break;

    case 14:
        resetColors();
        $("#medium-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 &&  m <= 25) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("blue-square");
        $("#medium-square, #large-square, #largest-square").addClass("green-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square").addClass("red-square");
        }
        break;

    case 15:
        resetColors();
        $("#large-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square, #largest-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square, #largest-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square").addClass("red-square");
        }
        break;

    case 16:
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square, #small-square-two").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#largest-square").addClass("red-square");
        }
        break;

    case 17:
        resetColors();
        $("#largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #largest-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #largest-square").addClass("green-square");
        $("#small-square-two, #large-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #largest-square").addClass("red-square");
        }
        break;

    case 18:
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two, #medium-square, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square, #small-square-two, #large-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        }
        break;

    case 19:
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("blue-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("blue-square");
        $("#small-square-one, #small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#large-square").addClass("green-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #large-square").addClass("green-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#largest-square").addClass("blue-square");
        $("#medium-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #large-square").addClass("green-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square, #large-square").addClass("green-square");
        $("#small-square-two, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        }
        break;

    case 20:
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one, #small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #large-square").addClass("green-square");
        $("#medium-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 21:
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two, #medium-square").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        }
        break;

    case 22:
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#large-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#large-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#medium-square,#largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one").addClass("green-square");
        $("#large-square,#largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-one,#small-square-two").addClass("green-square");
        $("#large-square,#largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#medium-square").addClass("green-square");
        $("#small-square-two, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one,#medium-square,#large-square,#largest-square").addClass("red-square");
        }
        break;

    case 23:
        resetColors();
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("red-square");

        if (m > 0 && m <= 5) {
        resetColors();
        $("#small-square-one, #medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        }

        else if (m > 5 && m <= 10) {
        resetColors();
        $("#medium-square, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one").addClass("blue-square");
        }

        else if (m > 10 && m <= 15) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 15 && m <= 20) {
        resetColors();
        $("#small-square-one, #large-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square").addClass("blue-square");
        }

        else if (m > 20 && m <= 25) {
        resetColors();
        $("#medium-square, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #large-square").addClass("blue-square");
        }

        else if (m > 25 && m <= 30) {
        resetColors();
        $("#small-square-one, #largest-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #large-square").addClass("blue-square");
        }

        else if (m > 30 && m <= 35) {
        resetColors();
        $("#medium-square, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #largest-square").addClass("blue-square");
        }

        else if (m > 35 && m <= 40) {
        resetColors();
        $("#small-square-one, #large-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #largest-square").addClass("blue-square");
        }

        else if (m > 40 && m <= 45) {
        resetColors();
        $("#small-square-one, #medium-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 45 && m <= 50) {
        resetColors();
        $("#medium-square").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#small-square-one, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 50 && m <= 55) {
        resetColors();
        $("#small-square-one").addClass("red-square");
        $("#small-square-two").addClass("green-square");
        $("#medium-square, #large-square, #largest-square").addClass("blue-square");
        }

        else if (m > 55 && m <= 59) {
        $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").addClass("red-square");
        }
        break;

    default:
        console.log("");
    }
};

var resetColors = function(){
    $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").removeClass("red-square");
    $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").removeClass("green-square");
    $("#small-square-one, #small-square-two, #medium-square, #large-square, #largest-square").removeClass("blue-square");
};

if(firstTime){
    setHours(firstHour,firstMinute);
    firstTime = false;
}

var updateTime = function(){
    var x = new Date();
    hrs = x.getHours();
    mins = x.getMinutes();
    setHours(hrs, mins);
};

setInterval(function(){
    updateTime();
},3000);

function appearance(){
    var elements = document.body;
    elements.classList.toggle("appearance-light");
}

function change(){
    var btn = document.getElementById("appearanceButton");
    if (btn.value == "Light") {
        btn.value = "Dark";
        btn.innerHTML = "Dark";
    }
    else if (btn.value == "Dark") {
        btn.value = "Light";
        btn.innerHTML = "Light";
    } 
}