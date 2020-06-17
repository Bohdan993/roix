import { noUiSlider, wNumb } from '../../libs/libs'
import { sliders } from '../view'



export default class InitSliders  {

	static __initSliders(el, {
			start = 0,
	    connect = 'lower',
	    orientation = 'vertical',
	    direction = 'rtl',
	    tooltips =  [wNumb({decimals: 0, suffix: '%'})],
	    pips = {
        mode: 'range',
        density: this,
        format: wNumb({
          suffix: '%'
        })
    	},
	    range = {
	        'min': 20,
	        'max': 100
	    },
	   
	} = {}){

			noUiSlider.create(el, {start, connect, orientation, direction, tooltips, pips, range})
	}


	static callSliders(orientation, direction){



		sliders.forEach(el=> {

					if(el.classList.contains('percent-slider')) {
						this.__initSliders(el, {orientation, direction})
						// console.log(el.noUiSlider)
					} else if(el.classList.contains('percent-slider-2')) {
						this.__initSliders(el, {range: {min: 5, max: 25}, start: 0, orientation, direction})
					} else if(el.classList.contains('percent-slider-3')) {
						this.__initSliders(el, {range: {min: 0, max: 50}, start: 0, orientation, direction})
					} else if(el.classList.contains('absolute-slider')) {
						this.__initSliders(el, {range: {min: 0, max: 300}, start: 0, tooltips:  [wNumb({decimals: 0, suffix: 'тыс.р'})], pips:null, orientation, direction})
						let maxSumm = el.querySelector('.slider-area__max-value .slider-area__summ')
						let minSumm = el.querySelector('.slider-area__min-value .slider-area__summ')
						let maxCurrency = el.querySelector('.slider-area__max-value .slider-area__currency')
						let minCurrency = el.querySelector('.slider-area__min-value .slider-area__currency')
						maxSumm.textContent = el.noUiSlider.options.range.max
						minSumm.textContent = el.noUiSlider.options.range.min
						minCurrency.textContent = maxCurrency.textContent = 'тыс.р'
					} else if(el.classList.contains('absolute-slider-2')) {
						this.__initSliders(el, {range: {min: 0, max: 50}, start: 0, tooltips:  [wNumb({decimals: 0, suffix: 'тыс.р'})], pips: null,orientation, direction})
						let maxSumm = el.querySelector('.slider-area__max-value .slider-area__summ')
						let minSumm = el.querySelector('.slider-area__min-value .slider-area__summ')
						let maxCurrency = el.querySelector('.slider-area__max-value .slider-area__currency')
						let minCurrency = el.querySelector('.slider-area__min-value .slider-area__currency')
						maxSumm.textContent = el.noUiSlider.options.range.max
						minSumm.textContent = el.noUiSlider.options.range.min
						minCurrency.textContent = maxCurrency.textContent = 'тыс.р'
					}
		})


	}
}

