import EventObserver from './Observer'

import { noUiSlider, wNumb } from '../../libs/libs'

import {maxValue, minValue, sliders4, sliders5} from '../view'




const observeDimentions = ({ select })=> {


	let dimentionObserver = new EventObserver()
	dimentionObserver.subscribe(subscribeSliderCurrencyValue)
	dimentionObserver.subscribe(subscribeSliderTooltip)


	select.addEventListener('change', function(){
		dimentionObserver.broadcast({data: this.value});
	})

	// currInput.addEventListener('change', function(){
	// 	dimentionObserver.broadcast({param: this.value});
	// })

}


function subscribeSliderCurrencyValue(value, param){
	console.log(param)
	console.log(value)
	maxValue.forEach(el=> {
		el.textContent = value
	})
	minValue.forEach(el=> {
		el.textContent = value
	})
}


function subscribeSliderTooltip(value){
	[...sliders4, ...sliders5].forEach(el=> {
		el.noUiSlider.updateOptions({
				tooltips:  [wNumb({decimals: 0, suffix: value})]
		})
	})

}

export {
	 observeDimentions
}