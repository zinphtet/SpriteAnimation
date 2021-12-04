const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const select = document.getElementById('select');

const FrameArray = [
	{ X_Start: 0, X_end: 6, Y: 0 },
	{ X_Start: 0, X_end: 6, Y: 1 },
	{ X_Start: 0, X_end: 6, Y: 2 },
	{ X_Start: 0, X_end: 8, Y: 3 },
	{ X_Start: 0, X_end: 10, Y: 4 },
	{ X_Start: 0, X_end: 4, Y: 5 },
	{ X_Start: 0, X_end: 6, Y: 6 },
	{ X_Start: 0, X_end: 6, Y: 7 },
	{ X_Start: 0, X_end: 11, Y: 8 },
	{ X_Start: 0, X_end: 3, Y: 9 },
];

canvas.width = 300;
canvas.height = 300;
let img = new Image();
img.src = 'dog_sprite.png';
let frameX = 0;
let frameX_end = 6;
let frameY = 0;
let time = 0;

select.addEventListener('change', function (e) {
	// console.log(typeof eval(e.target.value));
	let index = eval(e.target.value);
	frameX = FrameArray[index].X_Start;
	frameX_end = FrameArray[index].X_end;
	frameY = FrameArray[index].Y;
});
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.drawImage(img, 572 * frameX, 523 * frameY, 572, 523, 0, 0, 300, 300);

	if (frameX >= frameX_end) {
		frameX = 0;
	}
	if (time % 8 == 0) {
		frameX++;
	}
	time++;

	requestAnimationFrame(animate);
}

animate();
