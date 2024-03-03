function setAlarm() {
    const alarmTimeInput = document.getElementById('alarmTime');
    const selectedTime = alarmTimeInput.value;
    
    // Create new alarm item
    const alarmItem = document.createElement('li');
    alarmItem.textContent = `Alarm set for ${selectedTime}`;
    document.getElementById('alarmList').appendChild(alarmItem);

    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Parse the selected time string into hours and minutes
    const [selectedHours, selectedMinutes] = selectedTime.split(':').map(Number);

    // Calculate the difference in milliseconds between the current time and the alarm time
    let timeDiff = (selectedHours - hours) * 60 * 60 * 1000;
    timeDiff += (selectedMinutes - minutes) * 60 * 1000;

    // Set the alarm using setTimeout
    setTimeout(() => {
      showAlert();
    }, timeDiff);
  }

  function showAlert() {
    const alertBox = document.createElement('div');
    alertBox.classList.add('alert');
    alertBox.textContent = 'Wake up!!!';
    document.body.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
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