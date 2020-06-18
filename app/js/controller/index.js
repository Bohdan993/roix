import { sliders, sliders4, sliders5, select, currInput, wantSlider, nowSlider} from '../view'
import InitSliders from './noUiSlidersInit'
import {
	calcSliderSum,
	// observeDimentions,
	observeSliders,
	bindInputWithSlider
} from '../model'


const app = {
	init() {
		this.sliders();
		// this.observeDimentions()
		this.observeSliders()
		this.binsInputWithSlider()
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
			calcSliderSum(sliders4)
			calcSliderSum(sliders5)
		})


		
	},

	observeDimentions(){
		// observeDimentions({select})
	},
	observeSliders(){
		window.addEventListener('load', function(){
			observeSliders({sliders})
		})

	},

	binsInputWithSlider(){
		window.addEventListener('load', function(){
			bindInputWithSlider([wantSlider, nowSlider])
		})
	}


}


export {
	app
}