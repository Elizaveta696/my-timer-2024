function getEvent() {
  const yearInput = document.getElementById('year-input');
  const monthInput = document.getElementById('month-input');
  const daysInput = document.getElementById('days-input');
  const hoursInput = document.getElementById('hours-input');
  const minutesInput = document.getElementById('minutes-input');
  const secondsInput = document.getElementById('seconds-input');

  var year = yearInput.value;
  var month = monthInput.value;
  var day = daysInput.value;
  var hour = hoursInput.value;
  var minute = minutesInput.value;
  var second = secondsInput.value;

  if (!(0 < day < 32) || (year < 2024) || !(0 <= minute < 61) || !(0 <= second < 61) || !(0 <= hour <= 24) || isNaN(day) || isNaN(hour) || isNaN(minute) || isNaN(second) || isNaN(year) || isNaN(month)) {
    alert("Please enter valid numbers for each field.");
    return null;
  }

  if(month < 10 && !month.includes('0')){
    month = "0" + month;
    console.log(month);
  }
  if(day < 10 && !day.includes('0')){
    day = "0" + day;
    console.log(day);
  }
  if(hour < 10 && !hour.includes('0')){
    hour = "0" + hour;
    console.log(hour);
  }
  if(minute < 10 && !minute.includes('0')){
    minute = "0" + minute;
    console.log(minute);
  }
  if(second < 10 && !second.includes('0')){
    second = "0" + second;
    console.log(second);
  }
 
  time = year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second;
  console.log(time);
  return moment(time);
}

function getTimeRemaining(eventTime){
    let now = moment();

    let days = eventTime.diff(now, 'days');
    let hours = eventTime.diff(now, 'hours');
    let minutes = eventTime.diff(now, 'minutes');
    let seconds = eventTime.diff(now, 'seconds');

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours - 24*days;
    document.getElementById("minutes").innerText = minutes - 60*hours;
    document.getElementById("seconds").innerText = seconds - 60*minutes;
}
const showBtn = document.getElementById("show-btn");
const customDialog = document.getElementById('custom-dialog');
const setEventBtn = document.getElementById('set-event-btn');

showBtn.addEventListener('click', function() {
  customDialog.style.display = 'block';
})

let interval;
setEventBtn.addEventListener('click', function() {
  clearInterval(interval);
    let eventTime = getEvent(); 
    getTimeRemaining(eventTime);
    customDialog.style.display = 'none';

    interval = setInterval(() => {
      getTimeRemaining(eventTime);
    }, 1000);
  
});