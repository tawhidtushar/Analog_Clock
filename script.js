const goluHourMarks = document.getElementById('golu-hour-marks');
for (let i = 0; i < 12; i++) {
    const mark = document.createElement('div');
    mark.className = 'golu-hour-mark';
    mark.style.transform = `rotate(${i * 30}deg)`;
    goluHourMarks.appendChild(mark);
}

const goluSecondMarks = document.getElementById('golu-second-marks');
for (let i = 0; i < 60; i++) {
    const mark = document.createElement('div');
    mark.className = 'golu-second-mark';
    mark.style.transform = `rotate(${i * 6}deg)`;
    if (i % 5 === 0) mark.style.opacity = '0';
    goluSecondMarks.appendChild(mark);
}

const goluHourHand = document.getElementById('golu-hour-hand');
const goluMinuteHand = document.getElementById('golu-minute-hand');
const goluSecondHand = document.getElementById('golu-second-hand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    
    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = (minutes * 6) + (seconds * 0.1);
    const secondAngle = (seconds * 6) + (milliseconds * 0.006);
    
    goluHourHand.style.transform = `rotate(${hourAngle}deg)`;
    goluMinuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    goluSecondHand.style.transform = `rotate(${secondAngle}deg)`;
    
    requestAnimationFrame(updateClock);
}

updateClock();
