
const sliders1 = document.querySelectorAll('.percent-slider')
const sliders2 = document.querySelectorAll('.percent-slider-2')
const sliders3 = document.querySelectorAll('.percent-slider-3')
const sliders4 = document.querySelectorAll('.absolute-slider')
const sliders5 = document.querySelectorAll('.absolute-slider-2')

const sliders = [...sliders1, ...sliders2, ...sliders3, ...sliders4, ...sliders5]


const select = document.querySelector('.header__units-select')
const currInput = document.querySelector('.input-curr')
const wantInput = document.querySelector('.input-want')


const maxValue = document.querySelectorAll('.slider-area__max-value .slider-area__currency')
const minValue = document.querySelectorAll('.slider-area__min-value .slider-area__currency')


const rows = document.querySelectorAll('.count-table__data-body-row')



let rowsArr = [...rows].map((el, ind)=> {
	// console.log(el.children.children)
	return Array.from(el.children).splice(1).map(elem=> elem.firstElementChild)
})

// console.log(rowsArr)



export {
	sliders,
	sliders4,
	sliders5,
	select,
	maxValue,
	minValue,
	currInput,
	rows,
	rowsArr
}