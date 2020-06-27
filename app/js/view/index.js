const nowSlider = document.querySelector('#now-slider')
const wantSlider = document.querySelector('#want-slider')

const sliders1 = document.querySelectorAll('.percent-slider')
const sliders2 = document.querySelectorAll('.percent-slider-2')
const sliders3 = document.querySelectorAll('.percent-slider-3')
const sliders4 = document.querySelectorAll('.absolute-slider')
const sliders5 = document.querySelectorAll('.absolute-slider-2')

const sliders = [...sliders1, ...sliders2, ...sliders3, ...sliders4, ...sliders5]


const select = document.querySelector('.header__units-select')
const currInput = document.querySelector('.input-curr')
const wantInput = document.querySelector('.input-want')


const maxValue1 = document.querySelectorAll('.absolute-slider .slider-area__max-value .slider-area__summ')
const maxValue2 = document.querySelectorAll('.absolute-slider-2 .slider-area__max-value .slider-area__summ')
// const minValue = document.querySelectorAll('.slider-area__min-value .slider-area__summ')


const rows = document.querySelectorAll('.count-table__data-body-row')



let rowsArr = [...rows].map((el, ind)=> {
	// console.log(el.children.children)
	return Array.from(el.children).splice(1).map(elem=> elem.firstElementChild)
})


const ctx = document.getElementById('myChart')
const ctx2 = document.getElementById('myChart2')


const titles = document.querySelectorAll('.slider-area__item-title')





export {
	sliders,
	sliders4,
	sliders5,
	select,
	maxValue1,
	maxValue2,
	currInput,
	rows,
	rowsArr,
	nowSlider,
	wantSlider,
	ctx,
	ctx2,
	titles
}