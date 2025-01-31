function updateTime() {
  const utcTimeElement = document.querySelector(".utc-time");
  const now = new Date();
  utcTimeElement.textContent = "Current UTC Time: " + now.toUTCString();
}

updateTime();
setInterval(updateTime, 60000);
