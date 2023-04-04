const btn = document.getElementById('btn');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
