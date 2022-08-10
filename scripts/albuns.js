const div = document.querySelector('div.main')

/* Executes all functions using the passed parameter as a verifier */
async function execute(name) {
	const data = await fetch('https://emilsonfilho.github.io/openAPIs/src/imagineDragonsAPI.json')
		.then(response => response.json())
	
	let album = albumNameCheck(name, data)
	
	if (album.isAlbum) {
		await createElements(album.obj)
		lightDark()
	} else {
		error(name)
	}
	
}

/* Checks if the album really exists and returns its value if true */
function albumNameCheck(name, data) {
	for (let artist in data) {
		let albuns = data[artist].albuns

		for (let album in albuns) {
			if (albuns[album].albumName == name) {
				return {isAlbum: true, obj: albuns[album]}
			} 
		}
		return false
	}
}

/* Create the elements of div.main */
function createElements(album) {
	/* Creating Elements */
	const title = createHeading(1, album.albumName)
	const img = createImage(album.image)
	const artist = createParagraph('Cantor(@)/Banda', album.artist)
	const released = createParagraph('Ano de Lançamento', album.year)
	const genre = createParagraph('Gênero', album.genre)
	const duration = createParagraph('Duração', album.duration)
	const lang = createParagraph('Idioma', album.language)
	const h3 = createHeading(3, 'Músicas')
	const list = createList(album)

	div.append(title, img, artist, released, genre, duration, lang, h3, list)
}

/* Creates a paragraph in page bold style and returns it */
function createParagraph(message, description) {
	const p = document.createElement('p')
	p.innerHTML = `<p><strong>${message}: </strong>${description}</p>`
	return p
}

/* Having a number to identify its type, returns a heading */
function createHeading(num, message) {
	const heading = document.createElement(`h${num}`)
	heading.innerText = message
	return heading
}

/* Creates the image to be displayed with its src being passed in the invocation */
function createImage(src) {
	const image = document.createElement('img')
	image.setAttribute('alt', 'Foto do Álbum')
	image.setAttribute('src', src)
	return image
}


/* Create the song list  */
function createList(album) {
	const ul = document.createElement('ul')
	
	const musicas = album.musics
	for (let musica in musicas) {
		const li = document.createElement('li')
		const h4 = createHeading(4, musicas[musica].musicName)
		
		const ulStream = document.createElement('ul')
		
		const liSpotify = document.createElement('li')
		const aSpotify = createLinks(musicas[musica].linkSpotify, 'Ouvir no Spotify', 'spotify')
		const liYouTube = document.createElement('li')
		const aYouTube = createLinks(musicas[musica].linkYouTube, 'Ouvir no YouTube', 'youtube')
		
		liSpotify.appendChild(aSpotify)
		liYouTube.appendChild(aYouTube)
		
		ulStream.appendChild(liSpotify)
		ulStream.appendChild(liYouTube)
		
		li.appendChild(h4)
		li.appendChild(ulStream)
		ul.appendChild(li)
	}
	return ul
}

/* Get the href, content and class and return the link */
function createLinks(link, message, _class) {
	const a = document.createElement('a')
	a.setAttribute('href', link)
	a.setAttribute('target', '_blank')
	a.setAttribute('rel', 'external')
	a.setAttribute('class', _class)
	a.innerText = message

	return a
}

/* Creates an error message and displays it with the message passed by the parameter */
function createError(message) {
	const h1 = document.createElement('h1')
	h1.style.color = 'darkred'
	h1.innerText = 'ERRO'

	const divError = document.createElement('div')
	divError.setAttribute('class', 'error')
	
	const para = document.createElement('p')
	para.innerText = message
	
	divError.appendChild(para)
	
	return { heading: h1, body: divError }
}

/* Make divError elements appear */
function error(name) {
	const err = createError(`Álbum Inválido. O álbum ${name} não foi encontrado em nossa lista de dados.`)
	
	div.appendChild(err.heading)
	div.appendChild(err.body)
}

function lightDark() {
	const check = document.querySelector('input[type="checkbox"]')

	const body = document.querySelector('body')
	const title = document.querySelector('h1')
	const back = document.querySelector('img#left-arrow')
	const strong = document.querySelectorAll('strong')
	const p = document.querySelectorAll('p')
	const h3 = document.querySelector('h3')
	const h4 = document.querySelectorAll('li')
	const spotify = document.querySelectorAll('a.spotify')
	const youtube = document.querySelectorAll('a.youtube')

	check.addEventListener('click', () => {
	  if (check.checked) {
	   body.setAttribute('class', 'bg-dark')
 	   	title.setAttribute('class', 'color-dark')
    	back.setAttribute('src', '../../../img/dark-left-arrow.png')
    	strong.forEach(settingDark)
    	p.forEach(settingDark)
    	settingDark(h3)
    	h4.forEach(settingDark)
    	spotify.forEach(item => item.setAttribute('class', 'spotify-dark'))
    	youtube.forEach(item => item.setAttribute('class', 'youtube-dark'))
    	
	  } else {
   	 body.removeAttribute('class', 'bg-dark')
   	 title.removeAttribute('class', 'color-dark')
 	   back.setAttribute('src', '../../../img/left-arrow.png')
 	   strong.forEach(settingLight)
 	   p.forEach(settingLight)
 	   settingLight(h3)
 	   h4.forEach(settingLight)
 	   spotify.forEach(item => item.setAttribute('class', 'spotify'))
    	youtube.forEach(item => item.setAttribute('class', 'youtube'))
	  }
	})
}

function settingDark(item) {
	item.setAttribute('class', 'color-dark')
}

function settingLight(item) {
	item.removeAttribute('class', 'color-dark')
}