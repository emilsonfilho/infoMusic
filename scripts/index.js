const div = document.querySelector('div.container')

const url = 'https://emilsonfilho.github.io/openAPIs/src/imagineDragonsAPI.json'
const request = new XMLHttpRequest()
request.open('GET', url)
request.responseType = 'json'
request.send()


request.onload = function() {
	const data = request.response
	
	createElements(data)
}

function createElements(data) {

	for (let pos in data){
		const a = document.createElement('a')
		a.setAttribute('href', './artists/imagineDragons/imagineDragons.html')
		a.setAttribute('class', 'link-div')

		const card = document.createElement('div')
		card.setAttribute('class', 'card')
		card.style.backgroundColor = data[pos].background
	
		const img = document.createElement('img')
		img.setAttribute('src', data[pos].image)
		img.setAttribute('alt', 'Imagem da Banda')
	
		const h2 = document.createElement('h2')
		h2.innerText = data[pos].name

		const p = document.createElement('p')
		p.innerText = data[pos].genre

		card.append(img, h2, p)
	
		a.appendChild(card)
	
		div.appendChild(a)
	}
}