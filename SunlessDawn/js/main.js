const click = new Howl({
  src: ['sound/lamp-click.mp3'],
  volume: 0.5,
});

document.querySelector('.hover #switch').addEventListener(
  'click',
  () => {
    click.play();
    click.on('end', () => {
      document.getElementById('hover').classList.add('invisible');
    });
  },
  { once: true }
);

/* Menu behavior */
document.querySelectorAll('.nav-item').forEach((element) => {
  element.addEventListener('click', (event) => {
    let target = event.target;

    document.querySelectorAll('.nav-item a').forEach((item) => {
      item.classList.remove('active');
    });

    target.classList.add('active');
  });
});
