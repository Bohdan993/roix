


const openSliders = (titles) => {
	titles.forEach(el => {
		el.addEventListener('click', function(){
			el.parentNode.children[1].classList.toggle('open')
		})
	})
}


export default openSliders