import { sliders, sliders4, sliders5, select, currInput, wantSlider, nowSlider, titles} from '../view'
import InitSliders from './noUiSlidersInit'
import initChart from './initChart'
import {
	calcSliderSum,
	// observeDimentions,
	observeSliders,
	bindInputWithSlider,
	openSliders
} from '../model'


const app = {
	init() {
		this.sliders();
		// this.observeDimentions()
		this.observeSliders()
		this.binsInputWithSlider()
		this.chart()
		this.openSliders()
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
	},


	chart() {
		initChart();
	},

	openSliders() {
		openSliders(titles);
	}


}


export {
	app
}