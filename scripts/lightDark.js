
/*
while (title === null) {
	title = document.querySelector('h1')
}

if (title === null) {
	console.log('Uai')
	console.log(title)
}else{
	console.log('Erro')
}*/

const check = document.querySelector('input[type="checkbox"]')

const body = document.querySelector('body')
let title = document.querySelector('h1')

const back = document.querySelector('img#left-arrow')

check.addEventListener('click', () => {
  if (check.checked) {
    body.setAttribute('class', 'bg-dark')
    title.setAttribute('class', 'color-dark')
    back.setAttribute('src', '../../img/dark-left-arrow.png')
  } else {
    body.removeAttribute('class', 'bg-dark')
    title.removeAttribute('class', 'color-dark')
    back.setAttribute('src', '../../img/left-arrow.png')
  }
})

