import EventObserver from './Observer'

import {calcSliderSum} from './calcOneSliderSum'

import {maxValue1, maxValue2, sliders4, sliders5} from '../view'



const bindInputWithSlider = (slider) => {
	
	slider.forEach(el=> {
		let valueObserver = new EventObserver()
		valueObserver.subscribe(subscribeInputValue)



		el.noUiSlider.on('slide', function(value, handle) {
			this.target.parentNode.firstElementChild.value = Math.round(+value[handle])
		})


		el.parentNode.firstElementChild.addEventListener('input', function(){
			this.value = +this.value
			this.value = +this.value <= +this.getAttribute('min') ? +this.getAttribute('min') : +this.value
			el.noUiSlider.set(+this.value)
			// el.noUiSlider.updateOptions({
			// 	range: {
			// 		min: 0,
			// 		max: +this.value
			// 						}
			// }, true)
		})


		el.noUiSlider.on('set', function(value, handle){
			valueObserver.broadcast({data: Math.round(+value[handle]), target: el});
		})

	})

}



function subscribeInputValue(value, target){


	if(target.id === 'now-slider') {
		sliders4.forEach(el=> {
				el.noUiSlider.updateOptions({
					range: {
						min: 0,
						max: value
					}
			})
		})
		maxValue1.forEach(el=> {
			el.textContent = value
		})

	} else if (target.id === 'want-slider') {

		sliders5.forEach(el=> {

			el.noUiSlider.updateOptions({
				range: {
					min: 0,
					max: value
				}
			})

			maxValue2.forEach(el=> {
				el.textContent = value
			})

		})
	}
}





export {
	bindInputWithSlider
}