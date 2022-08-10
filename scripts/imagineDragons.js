const main = document.querySelector('div.main')
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
	
	for (let pos in data) {
		
		const albuns = data[pos].albuns
		for (let album in albuns) {
			const a = document.createElement('a')
			const link = `albuns/${albuns[album].albumName
				.toLowerCase()
				.replaceAll(/\+|\—/g, '')
				.replaceAll(/\s+/g, '-')}.html`
			a.setAttribute('href', link)
			a.setAttribute('class', 'link-div')
	
			const card = document.createElement('div')
			card.setAttribute('class', 'card')
			card.style.backgroundColor = albuns[album].background

			const img = document.createElement('img')
			img.setAttribute('src', albuns[album].image)
			img.setAttribute('alt', 'Foto do Álbum')
			
			const h2 = document.createElement('h2')
			h2.innerText = albuns[album].albumName
			
			const p = document.createElement('p')
			p.innerText = `Ano Lançamento: ${albuns[album].year}`

			a.appendChild(card)
			card.append(img, h2, p)
			div.appendChild(a)
		}
	}
}

function createLinks(link, message, _class) {
	const a = document.createElement('a')
	a.setAttribute('href', link)
	a.setAttribute('target', '_blank')
	a.setAttribute('rel', 'external')
	a.setAttribute('class', _class)
	a.innerText = message

	return a
}
