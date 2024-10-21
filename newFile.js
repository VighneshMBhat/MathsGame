

//if we click on start button/reset
document.getElementById("start").onclick = function () {
    //if we are playing
    if (playing == true) {
        location.reload(); //reloading our page
    } else { //not playing
        //change mode to playing
        playing = true;
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

        //show countdown button
        show("timeremain");
        timeremain = 60;
        document.getElementById("timeremainvalue").innerHTML = timeremain;

        //hide game over box
        hide("gameover");

        //change button to reset
        document.getElementById("start").innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        //gennerate new Q&A
        generateQA();

    }
}
