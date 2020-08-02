
const sort = () => {
  const grid = document.querySelector('.grid');
  const elements = document.querySelectorAll('.square');
  
  const squareArr = [].slice.call(elements).sort((a,b) => {
    return parseInt(a.textContent) > parseInt(b.textContent) ? 1 : -1;
  })

  squareArr.forEach(square => {
    grid.appendChild(square);
});
}

const shuffle = () => {
  const grid = document.querySelector('.grid');
  for (let i = grid.children.length; i >= 0; i--) {
    grid.appendChild(grid.children[Math.random() * i | 0]);
  }
}