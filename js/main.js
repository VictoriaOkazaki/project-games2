const circleEl = document.querySelector(".check-svg-circle");
const powerIconEl = document.querySelector(".power-icon");
const svgCircle = document.querySelector('.svg-circle');

const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const text3 = document.querySelector('.text-3');

const startBtn = document.querySelector('.start-btn');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = 0;
let mins = 0;
let seconds = 0;

const min = document.getElementById('mins');
const sec = document.getElementById('seconds');
const h = document.getElementById('hours');
let timex;

function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0; mins++;
            if (mins > 59) {
                mins = 0; hours++;
                if (hours < 10) {
                    h.innerHTML = '0' + hours + ':';
                }
                else h.innerHTML = hours + ':';
            }

            if (mins < 10) {
                min.innerHTML = '0' + mins + ':';
            }
            else min.innerHTML = mins + ':';
        }
        if (seconds < 10) {
            sec.innerHTML = '0' + seconds;
        } else {
            sec.innerHTML = seconds;
        }


        startTimer();
    }, 1000);
}

const clearTimer = () => {
    clearTimeout(timex);
    min.innerHTML = '00:'
    sec.innerHTML = '00'
    h.innerHTML = '00:'
    hours = 0;
    mins = 0;
    seconds = 0;
}

let state = 'off';

startBtn.onclick = () => {
    if (state !== 'on') return;
    window.location.href = 'https://google.com'
}

const containerEl = document.querySelector(".big-btn__cont");
containerEl.onclick = () => {
    if (state === 'animation') return;
    if (state === 'on') {
        state = 'animation'
        clearTimer();
        text2.innerHTML = 'Отключение...';
        startBtn.classList.remove('start-btn-active');
        text3.innerHTML = 'Осталось <mark>0.0/0.0</mark> GB ⚡';
        circleEl.style.animation = `circle-anim-off 3s ease-in-out`;

        const onAnimEnd = () => {
            circleEl.removeEventListener("animationend", onAnimEnd);
            powerIconEl.style.fill = "#C3C7C6";
            svgCircle.classList.remove('circle-glow');
            text2.innerHTML = 'Отключено';
            state = 'off';
        }
        circleEl.addEventListener("animationend", onAnimEnd);

        return;
    }
    state = 'animation';
    circleEl.style.animation = `circle-anim-on 3s ease-in-out forwards`;
    text2.innerHTML = 'Проверка соединения...';
    text3.innerHTML = 'Подключение к удаленному серверу 10%';
    setTimeout(() => {
        text3.innerHTML = `Обработка ресурсов ${randomIntFromInterval(10, 100)}%`;
    }, 600);
    setTimeout(() => {
        text3.innerHTML = `Запрос данных с серверов ${randomIntFromInterval(10, 100)}%`;
    }, 1200);
    setTimeout(() => {
        text3.innerHTML = `Запрос данных с серверов ${randomIntFromInterval(10, 100)}%`;
    }, 1800);
    setTimeout(() => {
        text3.innerHTML = `Подбор зеркала казино ${randomIntFromInterval(10, 100)}%`;
    }, 2400);
    setTimeout(() => {
        text3.innerHTML = `Вероятность взлома ${randomIntFromInterval(85, 98)}%`;
        text2.innerHTML = 'Подключено';
        startTimer();
        startBtn.classList.add('start-btn-active');
        state = 'on';
    }, 2800);

    setTimeout(() => {
        powerIconEl.style.fill = "#26F095";
        svgCircle.classList.add('circle-glow')
    }, 1400);
};