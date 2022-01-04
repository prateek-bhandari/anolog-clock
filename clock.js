console.log('Welcome to my analog clock project.');

// let hour = document.getElementById('hour');
// let minute = document.getElementById('minute');
// let second = document.getElementById('second');



// console.log(h);
// console.log(m);
// console.log(s);
// console.log(hourRotate);
// console.log(minuteRotate);
// console.log(secondRotate);
let audioPlay=new Audio('clock.wav');

setInterval(() => {
    let t = new Date();

    let h = t.getHours();
    h = h % 12;
    let m = t.getMinutes();
    let s = t.getSeconds();

    let hourRotate = (30 * h) + m / 2 + (1 / 120) * s;

    let minuteRotate = 6 * m + 1 / 60 * s;

    let secondRotate = 6 * s;

    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minuteRotate}deg)`;
    second.style.transform = `rotate(${secondRotate}deg)`;
    // console.log(audioPlay.currentTime);
    audioPlay.play();

}, 1000);

