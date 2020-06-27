import { noUiSlider, wNumb } from '../../libs/libs'
import { sliders, nowSlider, wantSlider } from '../view'



export default class InitSliders  {

	static __initSliders(el, {
			start = 0,
	    connect = 'lower',
	    orientation = 'vertical',
	    direction = 'rtl',
	    tooltips =  [wNumb({decimals: 0, suffix: '%'})],
	    // pips = {
     //    mode: 'range',
     //    density: this,
     //    format: wNumb({
     //      suffix: '%'
     //    })
    	// },
	    range = {
	        'min': 20,
	        'max': 100
	    },
	   
	} = {}){

			noUiSlider.create(el, {start, connect, orientation, direction, tooltips, range})
	}


	static callSliders(orientation, direction){



		sliders.forEach(el=> {

					if(el.classList.contains('percent-slider')) {
						this.__initSliders(el, {orientation, direction, start: Math.round((Math.random() * 40) + 40)})
						// console.log(el.noUiSlider)
					} else if(el.classList.contains('percent-slider-2')) {
						this.__initSliders(el, {range: {min: 5, max: 25}, start: Math.round((Math.random() * 11) + 9), orientation, direction})
					} else if(el.classList.contains('percent-slider-3')) {
						this.__initSliders(el, {range: {min: 0, max: 50},  start: Math.round((Math.random() * 29) + 11), orientation, direction})
					} else if(el.classList.contains('absolute-slider')) {
						this.__initSliders(el, {range: {min: 0, max: 100}, start: 0, tooltips:  [wNumb({decimals: 0, suffix: ' руб.'})], pips:null, orientation, direction})
						let maxSumm = el.querySelector('.slider-area__max-value .slider-area__summ')
						let minSumm = el.querySelector('.slider-area__min-value .slider-area__summ')
						maxSumm.textContent = el.noUiSlider.options.range.max
						minSumm.textContent = el.noUiSlider.options.range.min
					} else if(el.classList.contains('absolute-slider-2')) {
						this.__initSliders(el, {range: {min: 0, max: 100}, start: 0, tooltips:  [wNumb({decimals: 0, suffix: ' руб.'})], pips: null,orientation, direction})
						let maxSumm = el.querySelector('.slider-area__max-value .slider-area__summ')
						let minSumm = el.querySelector('.slider-area__min-value .slider-area__summ')
						maxSumm.textContent = el.noUiSlider.options.range.max
						minSumm.textContent = el.noUiSlider.options.range.min
					}
				})

				this.__initSliders(nowSlider, {orientation: 'horizontal', direction: 'ltr', range: {
					'min': 0,
					'max': 99999
				}, tooltips: null
			})
				this.__initSliders(wantSlider, {orientation: 'horizontal', direction: 'ltr', range: {
					'min': 0,
					'max': 999999
				}, tooltips: null
			})

	}
}

