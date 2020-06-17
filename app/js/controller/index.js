import { sliders, sliders4, sliders5, select, currInput} from '../view'
import InitSliders from './noUiSlidersInit'
import {
	calcSliderSum,
	observeDimentions,
	observeSliders
} from '../model'


const app = {
	init() {
		this.sliders();
		this.observeDimentions()
		this.observeSliders()
	},

	sliders(){

		window.addEventListener('load', function(){
			if(this.innerWidth > 576) {
				InitSliders.callSliders('vertical', 'rtl')
			} else {
				InitSliders.callSliders('horizontal', 'ltr')
			}
		})

		window.addEventListener('load', function(){
			calcSliderSum(sliders, sliders4)
			calcSliderSum(sliders, sliders5)
		})


		
	},

	observeDimentions(){
		observeDimentions({select})
	},
	observeSliders(){
		window.addEventListener('load', function(){
			observeSliders({sliders})
		})

	}


}


export {
	app
}