// Function to update UTC Time
function updateUTCTime() {
  const utcElement = document.getElementById("utc-time");
  const now = new Date();
  utcElement.innerText = `Current UTC Time: ${now.toUTCString()}`;
}

// Update time on page load
updateUTCTime();

// Refresh UTC time every second
setInterval(updateUTCTime, 1000);
