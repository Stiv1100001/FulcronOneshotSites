const click = new Howl({
	src: ['sound/lamp-click.mp3'],
});

document.querySelector('.hover .cord').addEventListener(
	'click',
	() => {
		click.play();
		click.on('end', () => {
			document.getElementById('hover').classList.add('invisible');
		});
	},
	{ once: true }
);
