//Countdown

let nyhedsbrevSendes = new Date("June 20, 2023 19:00:00").getTime();

let countdownNyhedsbrev = setInterval(function() {
    
    let iDag = new Date().getTime();

    let dageIndtilNyhedsbrev = nyhedsbrevSendes - iDag;

    let dage = Math.floor(dageIndtilNyhedsbrev / (1000 * 60 * 60 * 24));

    let timer = Math.floor((dageIndtilNyhedsbrev % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutter = Math.floor((dageIndtilNyhedsbrev % (1000 * 60 * 60)) / (1000 * 60));

    if (dageIndtilNyhedsbrev < 0) {
        clearInterval(countdownNyhedsbrev);
        document.getElementById("countdown-id").innerHTML = "Nyhedsbrevet er sendt!";
        document.getElementById("countdown-dtm-text").innerHTML = " ";
    }
    else {
        document.getElementById("countdown-id").innerHTML = dage + "<br>" + timer + "<br>" + minutter;
    }

}, 1000);


let dageTimerMinutterArray = ["Dage", "Timer", "Minutter"];

for(let i = 0; i < dageTimerMinutterArray.length; i++) {
    document.getElementById("countdown-dtm-text").innerHTML += dageTimerMinutterArray[i] + "<br>";
}