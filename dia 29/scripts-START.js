let countdown;
const timerDisplay = document.querySelector
('.display__time-left')
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');




function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displaytimeLeft(seconds)
    displayEndTime(then);

    countdown = setInterval( () => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft <= 0 ){
            clearInterval(countdown);
        }
     
        displaytimeLeft(secondsLeft);
    },1000);
}

function displaytimeLeft(seconds){

    const minutes =Math.floor( seconds / 60);
    const remainerSeconds = seconds % 60;
    const display = `${minutes}:${remainerSeconds < 10 ? '0':''}${remainerSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour} : ${minutes < 10 ? '0':''}${minutes}`;

}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    timer(seconds);

}


buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})