const daysel = document.getElementById('days'),
hoursel = document.getElementById('hours'),
minsel = document.getElementById('mins'),
secsel = document.getElementById('secs');
const newYear = '1 Jan 2022';
function countdown () {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();
	const totalSeconds = (newYearDate - currentDate) / 1000;

	const days = Math.floor(totalSeconds/ 3600/24),
	hours = Math.floor(totalSeconds / 3600) % 24,
	mins = Math.floor(totalSeconds / 60) % 60,
	secs = Math.floor(totalSeconds) % 60;
	daysel.innerHTML = addZero(days);
	hoursel.innerHTML = addZero(hours);
	minsel.innerHTML = addZero(mins);
	secsel.innerHTML = addZero(secs);
}
function addZero(number) {
	return number < 10 ? `0${number}` : number;
}
// run function
setInterval(countdown,1000);
