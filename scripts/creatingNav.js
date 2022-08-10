const main = document.querySelector('div.main')

const menu = creatingElements('nav')
const label = creatingElements('label')
const checkbox = creatingElements('input')
const span = creatingElements('span')
const hr = creatingElements('hr')
const img = creatingElements('img')

const a = creatingElements('a')

attributes(checkbox, 'type', 'checkbox')
attributes(span, 'class', 'tick')
attributes(a, 'href', '../imagineDragons.html')
attributes(img, 'src', '../../../img/left-arrow.png')
attributes(img, 'id', 'left-arrow')

label.append(checkbox, span)
a.appendChild(img)
menu.append(label, a)
main.appendChild(menu)

function creatingElements(el) {
	return document.createElement(`${el}`)
}

function attributes(tag, att, value) {
	tag.setAttribute(att, value)
}