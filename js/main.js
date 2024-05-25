function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
containerEl.onclick = async () => {
    if (state === 'animation') return;
    if (state === 'on') {
        state = 'animation'
        clearTimer();
        text2.innerHTML = 'Отключение...';
        startBtn.classList.remove('start-btn-active');
        text3.innerHTML = 'Режим взлома';
        circleEl.style.animation = `circle-anim-off 3s ease-in-out`;

        const onAnimEnd = () => {
            circleEl.removeEventListener("animationend", onAnimEnd);
            powerIconEl.style.fill = "#C3C7C6";
            containerEl.classList.remove('circle-glow');
            text2.innerHTML = 'Отключено';
            state = 'off';
        }
        circleEl.addEventListener("animationend", onAnimEnd);

        return;
    }
    state = 'animation';
    circleEl.style.animation = `circle-anim-on 9s ease-in-out forwards`;
    text2.innerHTML = 'Проверка соединения...';

    setTimeout(() => {
        powerIconEl.style.fill = "#26F095";
        containerEl.classList.add('circle-glow')
    }, 1400);

    const showLoading = async (title) => {
        const ms = 700
        const startNumber = randomIntFromInterval(10, 80);
        const diffNum = 100 - startNumber;
        for (let i = startNumber; i <= 100; i++) {
            text3.innerHTML = title + ` ${i}%`;
            const delay = ms / diffNum;
            await wait(delay);
        }
        await wait(300);
    }

    await showLoading('Подключение к удаленному серверу');
    await showLoading('Обработка ресурсов');
    await showLoading('Запрос данных с серверов');
    await showLoading('Подбор зеркала казино');

    text3.innerHTML = `<span class="probability">Вероятность взлома ${randomIntFromInterval(85, 98)}%</span>`;
    text2.innerHTML = 'Подключено';
    startTimer();
    startBtn.classList.add('start-btn-active');
    state = 'on';
};