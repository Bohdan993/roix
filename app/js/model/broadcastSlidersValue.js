import EventObserver from './Observer'

import { noUiSlider, wNumb } from '../../libs/libs'

import { rows, rowsArr } from '../view'




const observeSliders = ({ sliders })=> {

	let obj = {}

	sliders.forEach(el=> {
		el.noUiSlider.on('set', function(values, handle){
			obj[el.id] = Math.round(+values[handle])

			if(el.id === 'satisfaction-wanted-1' || el.id === 'satisfaction-curr-1' || el.id === 'satisfaction-prev-1') {

				countRow1({obj, rowsArr, s1: 'satisfaction-wanted-1', s2: 'satisfaction-curr-1' })
				drawRow1({obj, rowsArr, i: [0,0], s1: 'satisfaction-wanted-1', s2: 'satisfaction-curr-1' })
				countRow7({obj, rowsArr, i: [6,0], s1: 'satisfaction-prev-1'})
				countRow8({obj, rowsArr, i: [7,0], i2: [0, 0]})
				countRow9({obj, rowsArr, i: [8,0], i2: [7,0], i3: [6,0]})

			} else if(el.id === 'satisfaction-wanted-2' || el.id === 'satisfaction-curr-2' || el.id === 'satisfaction-prev-2') {

				countRow1({obj, rowsArr, s1: 'satisfaction-wanted-2', s2: 'satisfaction-curr-2' })
				drawRow1({obj, rowsArr, i: [0,1], s1: 'satisfaction-wanted-2', s2: 'satisfaction-curr-2' })
				countRow7({obj, rowsArr, i: [6,1], s1: 'satisfaction-prev-2'})
				countRow8({obj, rowsArr, i: [7,1], i2: [0, 1]})
				countRow9({obj, rowsArr, i: [8,1], i2: [7,1], i3: [6,1]})

			} else if(el.id === 'satisfaction-wanted-3' || el.id === 'satisfaction-curr-3' || el.id === 'satisfaction-prev-3'){

				countRow1({obj, rowsArr, s1: 'satisfaction-wanted-3', s2: 'satisfaction-curr-3' })
				drawRow1({obj, rowsArr, i: [0,2], s1: 'satisfaction-wanted-3', s2: 'satisfaction-curr-3' })
				countRow7({obj, rowsArr, i: [6,2], s1: 'satisfaction-prev-3'})
				countRow8({obj, rowsArr, i: [7,2], i2: [0, 2]})
				countRow9({obj, rowsArr, i: [8,2], i2: [7,2], i3: [6,2]})

			} else if(el.id === 'satisfaction-wanted-4' || el.id === 'satisfaction-curr-4' || el.id === 'satisfaction-prev-4') {

				countRow1({obj, rowsArr, s1: 'satisfaction-wanted-4', s2: 'satisfaction-curr-4' })
				drawRow1({obj, rowsArr, i: [0,3], s1: 'satisfaction-wanted-4', s2: 'satisfaction-curr-4' })
				countRow7({obj, rowsArr, i: [6,3], s1: 'satisfaction-prev-4'})
				countRow8({obj, rowsArr, i: [7,3], i2: [0, 3]})
				countRow9({obj, rowsArr, i: [8,3], i2: [7,3], i3: [6,3]})

			} else if(el.id === 'satisfaction-wanted-5' || el.id === 'satisfaction-curr-5' || el.id === 'satisfaction-prev-5') {

				countRow1({obj, rowsArr, s1: 'satisfaction-wanted-5', s2: 'satisfaction-curr-5' })
				drawRow1({obj, rowsArr, i: [0,4], s1: 'satisfaction-wanted-5', s2: 'satisfaction-curr-5' })
				countRow7({obj, rowsArr, i: [6,4], s1: 'satisfaction-prev-5'})
				countRow8({obj, rowsArr, i: [7,4], i2: [0, 4]})
				countRow9({obj, rowsArr, i: [8,4], i2: [7,4], i3: [6,4]})

			} else if(el.id === 'revenue-curr-1' || el.id === 'revenue-prev-1' || el.id === 'satisfaction-weight-1' ) {

				countRow2({obj, rowsArr, s1: 'revenue-curr-1', s2: 'revenue-prev-1' })
				drawRow2({obj, rowsArr, i: [1,0], s1: 'revenue-curr-1', s2: 'revenue-prev-1' })
				countRow4({obj, rowsArr, i: [3,0], i2: [0,0], s1: 'revenue-prev-1', s2: 'satisfaction-weight-1'})
				countRow6({obj, rowsArr, i: [5,0], i2: [1,0], i3: [3,0], s1: 'satisfaction-weight-1'})
				countRow10({obj, rowsArr, i: [9,0], i2: [8,0], s1: 'revenue-prev-1'})

			} else if(el.id === 'revenue-curr-2' || el.id === 'revenue-prev-2' || el.id === 'satisfaction-weight-2') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-2', s2: 'revenue-prev-2' })
				drawRow2({obj, rowsArr, i: [1,1], s1: 'revenue-curr-2', s2: 'revenue-prev-2' })
				countRow4({obj, rowsArr, i: [3,1], i2: [0,1], s1: 'revenue-prev-2', s2: 'satisfaction-weight-2'})
				countRow6({obj, rowsArr, i: [5,1], i2: [1,1], i3: [3,1], s1: 'satisfaction-weight-2'})
				countRow10({obj, rowsArr, i: [9,1], i2: [8,1], s1: 'revenue-prev-2'})

			} else if(el.id === 'revenue-curr-3' || el.id === 'revenue-prev-3' || el.id === 'satisfaction-weight-3') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-3', s2: 'revenue-prev-3' })
				drawRow2({obj, rowsArr, i: [1,2], s1: 'revenue-curr-3', s2: 'revenue-prev-3' })
				countRow4({obj, rowsArr, i: [3,2], i2: [0,2], s1: 'revenue-prev-3', s2: 'satisfaction-weight-3'})
				countRow6({obj, rowsArr, i: [5,2], i2: [1,2], i3: [3,2], s1: 'satisfaction-weight-3'})
				countRow10({obj, rowsArr, i: [9,2], i2: [8,2], s1: 'revenue-prev-3'})

			} else if(el.id === 'revenue-curr-4' || el.id === 'revenue-prev-4' || el.id === 'satisfaction-weight-4') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-4', s2: 'revenue-prev-4' })
				drawRow2({obj, rowsArr, i: [1,3], s1: 'revenue-curr-4', s2: 'revenue-prev-4' })
				countRow4({obj, rowsArr, i: [3,3], i2: [0,3], s1: 'revenue-prev-4', s2: 'satisfaction-weight-4'})
				countRow6({obj, rowsArr, i: [5,3], i2: [1,3], i3: [3,3], s1: 'satisfaction-weight-4'})
				countRow10({obj, rowsArr, i: [9,3], i2: [8,3], s1: 'revenue-prev-4'})

			} else if(el.id === 'revenue-curr-5' || el.id === 'revenue-prev-5' || el.id === 'satisfaction-weight-5') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-5', s2: 'revenue-prev-5' })
				drawRow2({obj, rowsArr, i: [1,4], s1: 'revenue-curr-5', s2: 'revenue-prev-5' })
				countRow4({obj, rowsArr, i: [3,4], i2: [0,4], s1: 'revenue-prev-5', s2: 'satisfaction-weight-5'})
				countRow6({obj, rowsArr, i: [5,4], i2: [1,4], i3: [3,4], s1: 'satisfaction-weight-5'})
				countRow10({obj, rowsArr, i: [9,4], i2: [8,4], s1: 'revenue-prev-5'})

			}


				
				
				
				
				

		})
	})

}


////////////////////////////////////////////
////////////////////////////////////////////


function countRow1({obj, rowsArr, s1, s2}){
	obj[s1] = +obj[s1] || 20
	obj[s2] = +obj[s2] || 20

	return Math.round(obj[s1] - obj[s2]) + '%'
}


function drawRow1({obj, rowsArr, i, s1, s2}){
	rowsArr[i[0]][i[1]].textContent = countRow1({obj, rowsArr, s1, s2})
	return
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow2({obj, rowsArr, s1, s2}){

	obj[s1] = +obj[s1] || 0
	obj[s2] = +obj[s2] || 0

	return Math.round(obj[s1] - obj[s2])
}


function drawRow2({obj, rowsArr, i, s1, s2}){

	rowsArr[i[0]][i[1]].textContent = countRow2({obj, rowsArr, s1, s2})
	return
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow4({obj, rowsArr, i, i2, s1, s2}){

	obj[s1] = +obj[s1] || 0
	obj[s2] = +obj[s2] || 5

	let multiplier = +rowsArr[i2[0]][i2[1]].textContent.replace(/\D/gi, "")

	rowsArr[i[0]][i[1]].textContent = (multiplier * obj[s1] * obj[s2])/10000

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////

function countRow6({obj, rowsArr, i, i2, i3, s1}){

	obj[s1] = +obj[s1] || 5
	
	let divided = +rowsArr[i3[0]][i3[1]].textContent.replace(/\D/gi, "")
	let divider = +rowsArr[i2[0]][i2[1]].textContent.replace(/\D/gi, "")


	if(divider === 0) {
		rowsArr[i[0]][i[1]].textContent = obj[s1] + '%'
	} else {
		rowsArr[i[0]][i[1]].textContent = (divided/divider) * 100 + '%'
	}

	return

}


//////////////////////////////////////////////
/////////////////////////////////////////////


function countRow7({obj, rowsArr, i, s1}){

	obj[s1] = +obj[s1] || 20

	if (obj[s1] <= 40) {
		rowsArr[i[0]][i[1]].textContent = 0.2
	} else if (obj[s1] <= 60) {
		rowsArr[i[0]][i[1]].textContent = 0.8
	} else if (obj[s1] <= 80) {
		rowsArr[i[0]][i[1]].textContent = 1
	} else if (obj[s1] <= 90) {
		rowsArr[i[0]][i[1]].textContent = 1.5
	} else {
		rowsArr[i[0]][i[1]].textContent = 3
	}

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow8({obj, rowsArr, i, i2}){

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/\D/gi, "")


	if (number <= 5) {
		rowsArr[i[0]][i[1]].textContent = 0.5
	} else if (number <= 10) {
		rowsArr[i[0]][i[1]].textContent = 1
	} else if (number <= 15) {
		rowsArr[i[0]][i[1]].textContent = 1.5
	} else if (number <= 20) {
		rowsArr[i[0]][i[1]].textContent = 2.5
	} else {
		rowsArr[i[0]][i[1]].textContent = 5
	}

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow9({obj, rowsArr, i, i2, i3}){

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/\D/gi, "")
	let number2 = +rowsArr[i3[0]][i3[1]].textContent.replace(/\D/gi, "")

	console.log(number)
	console.log(number2)
	rowsArr[i[0]][i[1]].textContent = (number * number2) / 1000 + "%"

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow10({obj, rowsArr, i, i2, s1}){

	obj[s1] = +obj[s1] || 0

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/\D/gi, "")

	rowsArr[i[0]][i[1]].textContent = (number * obj[s1]) / 10000

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////







export {
	observeSliders
}