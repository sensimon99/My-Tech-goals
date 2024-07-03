document.addEventListener('DOMContentLoaded', (event) => {
    function updateTimeAndDay() {
        const todayDate = new Date();

        const utcHours = todayDate.getUTCHours()
        const utcMinutes = todayDate.getUTCMinutes()
        const day = todayDate.toLocaleDateString('en-US', { weekday: 'long' });

        document.getElementById('currentHour').innerHTML = utcHours
document.getElementById('currentMinutes').innerHTML =utcMinutes
document.getElementById('current-day').innerHTML = day;
console.log('hour:', document.getElementById('currentHour').innerHTML)

    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
// const utcTime = `${utcHours.toString().padStart(2, '0')}:${utcMinutes}:${utcSeconds}`;
// console.log("utc time", utcTime)

// const todayDate = new Date();

// const utcHours = todayDate.getUTCHours()
// const utcMinutes = todayDate.getUTCMinutes()

// document.getElementById('currentHour').innerHTML = utcHours
// document.getElementById('currentMinutes').innerHTML =utcMinutes
// console.log('hour:', document.getElementById('currentHour').innerHTML)
