// För att det här scriptet ska fungera så behöver du lägga till en .dark klass i din css där du stylar dina färger
// du behöver också en checkbox med id="darkmode-switch" i din HTML


const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasSetDarkmode = localStorage.getItem('darkmode')
const questions = document.querySelectorAll ('.question')

if(hasSetDarkmode == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
  } else {
    disableDarkMode()
  }
} else if(hasSetDarkmode === 'on') {
  enableDarkMode()
} else if(hasSetDarkmode === 'off') {
  disableDarkMode()
}
darkmodeSwitch.addEventListener('change', () => {
  if(darkmodeSwitch.checked) {
    enableDarkMode()
    localStorage.setItem('darkmode', 'on')
  } else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
  }
})
function enableDarkMode() {
  darkmodeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkmodeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}




questions.forEach(question => {
  question.addEventListener('click', e => {




  const parent = question.parentElement;
  const answer = parent.querySelector('.answer');
  const acordionBtn = parent.querySelector ('.btn-round');     
  answer.classList.toggle('open')
  acordionBtn.classList.toggle('close')
  })
})