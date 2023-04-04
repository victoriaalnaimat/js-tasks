const btn = document.getElementById('button');

let index0 = 0;
let index1 = 1;

const colors = ['red', 'green', 'blue', 'purple'];

button.addEventListener('click', function buttonColor() {
  button.style.backgroundColor = colors[index];

  index = index + 1
});
