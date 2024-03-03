function setAlarm() {
    const timeAlarmInput = document.getElementById('timeAlarm');
    const timeSelected = timeAlarmInput.value;
    
    // Create new alarm item
    const itemAlarm = document.createElement('li');
    itemAlarm.textContent = `Alarm set for ${timeSelected}`;
    document.getElementById('alarmList').appendChild(itemAlarm);

    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    //The selected time string into hours and minutes
    const [hoursSelected, minutesSelected] = timeSelected.split(':').map(Number);

    //The difference in milliseconds between the current time and the alarm time
    let timeDiff = (hoursSelected - hours) * 60 * 60 * 1000;
    timeDiff += (minutesSelected - minutes) * 60 * 1000;

    // Set the alarm using setTimeout
    setTimeout(() => {
      alertShow();
    }, timeDiff); 
  }

  function alertShow() {
    const boxAlert = document.createElement('div');
    boxAlert.classList.add('alert');
    boxAlert.textContent = 'Wake up!!!';
    document.body.appendChild(boxAlert);

    setTimeout(() => {
      boxAlert.remove();
    }, 5000); // Remove the alert after 5 seconds
  }

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initialize the clock when the page loads
  updateClock();
