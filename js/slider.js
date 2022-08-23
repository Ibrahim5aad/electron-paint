function sliderFunctionality(){
	var imgs = document.getElementsByClassName('thumbnail')
	var imgPreview = document.getElementsByClassName('imgPreview')
	var selected = imgs[0]
	for(let i of imgs){
		i.onclick = function(){
			imgPreview[0].src = i.src
			selected = this
			this.classList.add('selected')
			imgPreview[0].classList.add('fader')

	}
		i.onmouseover = function (){
			imgPreview[0].src = i.src

		}

		i.onmouseout = function(){
			imgPreview[0].src = selected.src
			imgPreview[0].classList.remove('fader')
			currentThumbnail(imgs, selected)
		}

}
}

    function currentThumbnail(imgs, i, imgPreview){
	for(let img of imgs){
		img.classList.remove('selected')
		if(img == i){
			img.classList.add('selected')
		}
	}
}
 