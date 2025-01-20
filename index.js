const BackgroundImage = document.getElementsByClassName("Image fullscreen")[0];
const clockTime = document.getElementById("clockTime");
const dateString = document.getElementById("dateString");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateBackgroundPosition() {
	if ((window.screenLeft < -5 || window.screenTop < -5) || (window.screenLeft > 3435)) {
		BackgroundImage.style.backgroundPosition = "center";
		BackgroundImage.style.backgroundSize = "cover";
	}
	else {
		BackgroundImage.style.backgroundPosition = `${-window.screenLeft - 5}px ${-window.screenTop}px`;
		BackgroundImage.style.backgroundSize = "auto";
	}
}
function updateClock() {
	const nowTime = new Date();
	clockTime.textContent = `${String(nowTime.getHours()).padStart(2, "0")}:${String(nowTime.getMinutes()).padStart(2, "0")} `
}
function updateDateString() {
	const nowTime = new Date();
	dateString.textContent = `${daysOfWeek[nowTime.getDay()]}, ${months[nowTime.getMonth()]} ${nowTime.getDate()}`;
}

window.addEventListener("resize", updateBackgroundPosition);
window.addEventListener("load", updateBackgroundPosition);
setInterval(updateBackgroundPosition, 5000);
setInterval(updateClock, 5000);
setInterval(updateDateString, 60000);
updateClock();
updateDateString();