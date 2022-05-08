const btnToggle = document.querySelector('.btnToggle')
const body = document.querySelector('body');


btnToggle.addEventListener("click", () => {
  console.log('press')
  body.classList.toggle("darkmode");
});

