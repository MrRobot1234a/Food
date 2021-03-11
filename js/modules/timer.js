function timer(timerSelector, dedline) {

    /*Timer*/

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getZero2(num) {
        if (num === 0 ) {
            return `0${num}`;
        }
    }

    function setClock(selector, endTime) {

        const timer = document.querySelector(selector),
              days = timer.querySelector(`#days`),
              hours = timer.querySelector(`#hours`),
              minutes = timer.querySelector(`#minutes`),
              seconds = timer.querySelector(`#seconds`),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const result = getTimeRemaining(endTime);

            days.innerHTML = getZero(result.days);
            hours.innerHTML =  getZero(result.hours);
            minutes.innerHTML = getZero(result.minutes);
            seconds.innerHTML = getZero(result.seconds);

            if (result.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = getZero2(0);
                hours.innerHTML = getZero2(0); 
                minutes.innerHTML = getZero2(0);
                seconds.innerHTML = getZero2(0);
            }

            
        }

    }

    

    setClock(timerSelector, dedline);
}

export default timer;