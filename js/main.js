const circleEl = document.querySelector(".check-svg-circle");
const powerIconEl = document.querySelector(".power-icon");
const svgCircle = document.querySelector('.svg-circle');

const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const text3 = document.querySelector('.text-3');

const startBtn = document.querySelector('.start-btn');

circleEl.addEventListener("animationend", () => {
    // powerIconEl.style.fill = "grey";
});

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = 0;
let mins = 0;
let seconds = 0;

const min = document.getElementById('mins');
const sec = document.getElementById('seconds');
const h = document.getElementById('hours');

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

const containerEl = document.querySelector(".big-btn__cont");
containerEl.onclick = () => {
    // circleEl.style.animation = `3s ease-in-out 0.5s 1 normal forwards running check-svg-circle-anim`;

    circleEl.style.animation = `check-svg-circle-anim 3s ease-in-out forwards`;
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
    }, 2800);

    setTimeout(() => {
        powerIconEl.style.fill = "#26F095";
        svgCircle.classList.add('circle-glow')
    }, 1400);
};