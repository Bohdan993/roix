// import EventObserver from './Observer'

import { noUiSlider, wNumb } from '../../libs/libs'

import { rows, rowsArr } from '../view'



// let flag = []

const observeSliders = ({ sliders })=> {

	let obj = {}
	let commonSatisfactionPrev = 0
	let commonSatisfactionCurr = 0
	let commonSatisfactionWanted = 0
	// let flag = sliders.map(el=> true)


	sliders.forEach((el, ind)=> {

		el.noUiSlider.on('set', calculateTable)

		// if(flag[ind]) {
		// 		el.noUiSlider.on('update.one', calculateTable)
		// 		flag[ind] = false
		// 		// el.noUiSlider.off('update');
				
		// }
	

		function calculateTable (values, handle){

			obj[el.id] = Math.round(+values[handle])
			// console.log(flag)




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

				// console.log('fffgfg')

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

			} else if(el.id === 'revenue-curr-1' || el.id === 'revenue-prev-1' || el.id === 'satisfaction-weight-1' || el.id === 'client-profitability-1') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-1', s2: 'revenue-prev-1' })
				drawRow2({obj, rowsArr, i: [1,0], s1: 'revenue-curr-1', s2: 'revenue-prev-1' })
				countRow4({obj, rowsArr, i: [3,0], i2: [0,0], s1: 'revenue-prev-1', s2: 'satisfaction-weight-1'})
				countRow6({obj, rowsArr, i: [5,0], i2: [1,0], i3: [3,0], s1: 'satisfaction-weight-1'})
				countRow10({obj, rowsArr, i: [9,0], i2: [8,0], s1: 'revenue-prev-1'})
				countRow12({obj, rowsArr, i: [11, 0], i2: [9,0], i3: [3,0], s1: 'client-profitability-1'})
				countRow14({obj, rowsArr, i: [13, 0], i2: [9,0], i3: [11,0]})
				countRow17({obj, rowsArr, i: [16, 0], i2: [13, 0]})
				countRow3({obj, rowsArr, i: [2,0], i2: [16,0], i3: [1,0]})
				countRow5({obj, rowsArr, i: [4,0], i2: [16,0], i3: [3,0]})
				countRow11({obj, rowsArr, i: [10,0], i2: [16,4], i3: [9,0]})
				countRow13({rowsArr, i: [12, 0], i2: [16, 0], i3: [11,0]})
				countCell6Row2({rowsArr, i: [1,5], i1: [1, 0], i2: [1, 1], i3: [1, 2], i4: [1, 3], i5: [1, 4]})
				countCell6Row4({rowsArr, i: [3,5], i1: [3, 0], i2: [3, 1], i3: [3, 2], i4: [3, 3], i5: [3, 4]})
				countCell6Row6({rowsArr, i: [5, 5], i1: [1,5], i2: [3,5]})
				countCell6Row10({rowsArr, i: [9,5], i1: [9, 0], i2: [9, 1], i3: [9, 2], i4: [9, 3], i5: [9, 4]})
				countCell6Row12({rowsArr, i: [11,5], i1: [11, 0], i2: [11, 1], i3: [11, 2], i4: [11, 3], i5: [11, 4]})
				countCell6Row14({rowsArr, i:[13,5], i1: [9,5], i2:[11,5]})
				countRow15({obj, rowsArr, i: [14, 0], i2: [16, 0], s1: 'satisfaction-curr-1', s2: 'revenue-prev-1'})
				countRow16({obj, rowsArr, i: [15, 0], i2: [16, 0], s1: 'satisfaction-wanted-1', s2: 'revenue-curr-1'})
				countCell6Row17({rowsArr, i: [16, 5], i2: [13, 5]})
				countCell7Row1({obj, rowsArr, 
				i:[0,6], i1:[15, 0], i2:[15, 1], i3:[15, 2], i4:[15, 3], i5:[15, 4], i6:[14, 0], i7:[14, 1], i8:[14, 2], i9:[14, 3], i10:[14, 4],
				s1: 'revenue-curr-1', s2: 'revenue-curr-2', s3: 'revenue-curr-3', s4: 'revenue-curr-4', s5: 'revenue-curr-5',
				s6: 'revenue-prev-1', s7: 'revenue-prev-2', s8: 'revenue-prev-3', s9: 'revenue-prev-4', s10: 'revenue-prev-5'
			})
				countCell7Row2({rowsArr, i:[1,6], i1: [2,0], i2: [2,1], i3: [2,2], i4: [2,3], i5: [2,4]})
				countCell7Row4({rowsArr, i:[3,6], i1: [4,0], i2: [4,1], i3: [4,2], i4: [4,3], i5: [4,4]})
				countCell7Row6({rowsArr, i:[5, 6], 
					i1:[5, 0] , i2:[5, 1] , i3:[5, 2] , i4:[5, 3] , i5: [5, 4], 
					i6: [16,0], i7: [16,1], i8: [16,2], i9: [16,3], i10: [16,4]})

			} else if(el.id === 'revenue-curr-2' || el.id === 'revenue-prev-2' || el.id === 'satisfaction-weight-2' || el.id === 'client-profitability-2') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-2', s2: 'revenue-prev-2' })
				drawRow2({obj, rowsArr, i: [1,1], s1: 'revenue-curr-2', s2: 'revenue-prev-2' })
				countRow4({obj, rowsArr, i: [3,1], i2: [0,1], s1: 'revenue-prev-2', s2: 'satisfaction-weight-2'})
				countRow6({obj, rowsArr, i: [5,1], i2: [1,1], i3: [3,1], s1: 'satisfaction-weight-2'})
				countRow10({obj, rowsArr, i: [9,1], i2: [8,1], s1: 'revenue-prev-2'})
				countRow12({obj, rowsArr, i: [11, 1], i2: [9,1], i3: [3,1], s1: 'client-profitability-2'})
				countRow14({obj, rowsArr, i: [13, 1], i2: [9, 1], i3: [11,1]})
				countRow17({obj, rowsArr, i: [16, 1], i2: [13, 1]})
				countRow3({obj, rowsArr, i: [2,1], i2: [16,1], i3: [1,1]})
				countRow5({obj, rowsArr, i: [4,1], i2: [16,1], i3: [3,1]})
				countRow11({obj, rowsArr, i: [10,1], i2: [16,4], i3: [9,1]})
				countRow13({rowsArr, i: [12, 1], i2: [16, 1], i3: [11,1]})
				countCell6Row2({rowsArr, i: [1,5], i1: [1, 0], i2: [1, 1], i3: [1, 2], i4: [1, 3], i5: [1, 4]})
				countCell6Row4({rowsArr, i: [3,5], i1: [3, 0], i2: [3, 1], i3: [3, 2], i4: [3, 3], i5: [3, 4]})
				countCell6Row6({rowsArr, i: [5, 5], i1: [1,5], i2: [3,5]})
				countCell6Row10({rowsArr, i: [9,5], i1: [9, 0], i2: [9, 1], i3: [9, 2], i4: [9, 3], i5: [9, 4]})
				countCell6Row12({rowsArr, i: [11,5], i1: [11, 0], i2: [11, 1], i3: [11, 2], i4: [11, 3], i5: [11, 4]})
				countCell6Row14({rowsArr, i:[13,5], i1: [9,5], i2:[11,5]})
				countRow15({obj, rowsArr, i: [14, 1], i2: [16, 1], s1: 'satisfaction-curr-2', s2: 'revenue-prev-2'})
				countRow16({obj, rowsArr, i: [15, 1], i2: [16, 1], s1: 'satisfaction-wanted-2', s2: 'revenue-curr-2'})
				countCell6Row17({rowsArr, i: [16, 5], i2: [13, 5]})
				countCell7Row1({obj, rowsArr, 
				i:[0,6], i1:[15, 0], i2:[15, 1], i3:[15, 2], i4:[15, 3], i5:[15, 4], i6:[14, 0], i7:[14, 1], i8:[14, 2], i9:[14, 3], i10:[14, 4],
				s1: 'revenue-curr-1', s2: 'revenue-curr-2', s3: 'revenue-curr-3', s4: 'revenue-curr-4', s5: 'revenue-curr-5',
				s6: 'revenue-prev-1', s7: 'revenue-prev-2', s8: 'revenue-prev-3', s9: 'revenue-prev-4', s10: 'revenue-prev-5'
			})
				countCell7Row2({rowsArr, i:[1,6], i1: [2,0], i2: [2,1], i3: [2,2], i4: [2,3], i5: [2,4]})
				countCell7Row4({rowsArr, i:[3,6], i1: [4,0], i2: [4,1], i3: [4,2], i4: [4,3], i5: [4,4]})
				countCell7Row6({rowsArr, i:[5, 6], 
					i1:[5, 0] , i2:[5, 1] , i3:[5, 2] , i4:[5, 3] , i5: [5, 4], 
					i6: [16,0], i7: [16,1], i8: [16,2], i9: [16,3], i10: [16,4]})

			} else if(el.id === 'revenue-curr-3' || el.id === 'revenue-prev-3' || el.id === 'satisfaction-weight-3' || el.id === 'client-profitability-3') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-3', s2: 'revenue-prev-3' })
				drawRow2({obj, rowsArr, i: [1,2], s1: 'revenue-curr-3', s2: 'revenue-prev-3' })
				countRow4({obj, rowsArr, i: [3,2], i2: [0,2], s1: 'revenue-prev-3', s2: 'satisfaction-weight-3'})
				countRow6({obj, rowsArr, i: [5,2], i2: [1,2], i3: [3,2], s1: 'satisfaction-weight-3'})
				countRow10({obj, rowsArr, i: [9,2], i2: [8,2], s1: 'revenue-prev-3'})
				countRow12({obj, rowsArr, i: [11, 2], i2: [9,2], i3: [3,2], s1: 'client-profitability-3'})
				countRow14({obj, rowsArr, i: [13, 2], i2: [9, 2], i3: [11,2]})
				countRow17({obj, rowsArr, i: [16, 2], i2: [13, 2]})
				countRow3({obj, rowsArr, i: [2,2], i2: [16,2], i3: [1,2]})
				countRow5({obj, rowsArr, i: [4,2], i2: [16,2], i3: [3,2]})
				countRow11({obj, rowsArr, i: [10,2], i2: [16,4], i3: [9,2]})
				countRow13({ rowsArr, i: [12, 2], i2: [16, 2], i3: [11,2]})
				countCell6Row2({rowsArr, i: [1,5], i1: [1, 0], i2: [1, 1], i3: [1, 2], i4: [1, 3], i5: [1, 4]})
				countCell6Row4({rowsArr, i: [3,5], i1: [3, 0], i2: [3, 1], i3: [3, 2], i4: [3, 3], i5: [3, 4]})
				countCell6Row6({rowsArr, i: [5, 5], i1: [1,5], i2: [3,5]})
				countCell6Row10({rowsArr, i: [9,5], i1: [9, 0], i2: [9, 1], i3: [9, 2], i4: [9, 3], i5: [9, 4]})
				countCell6Row12({rowsArr, i: [11,5], i1: [11, 0], i2: [11, 1], i3: [11, 2], i4: [11, 3], i5: [11, 4]})
				countCell6Row14({rowsArr, i:[13,5], i1: [9,5], i2:[11,5]})
				countRow15({ obj, rowsArr, i: [14, 2], i2: [16, 2], s1: 'satisfaction-curr-3', s2: 'revenue-prev-3'})
				countRow16({obj, rowsArr, i: [15, 2], i2: [16, 2], s1: 'satisfaction-wanted-3', s2: 'revenue-curr-3'})
				countCell6Row17({rowsArr, i: [16, 5], i2: [13, 5]})
				countCell7Row1({obj, rowsArr, 
				i:[0,6], i1:[15, 0], i2:[15, 1], i3:[15, 2], i4:[15, 3], i5:[15, 4], i6:[14, 0], i7:[14, 1], i8:[14, 2], i9:[14, 3], i10:[14, 4],
				s1: 'revenue-curr-1', s2: 'revenue-curr-2', s3: 'revenue-curr-3', s4: 'revenue-curr-4', s5: 'revenue-curr-5',
				s6: 'revenue-prev-1', s7: 'revenue-prev-2', s8: 'revenue-prev-3', s9: 'revenue-prev-4', s10: 'revenue-prev-5'
			})
				countCell7Row2({rowsArr, i:[1,6], i1: [2,0], i2: [2,1], i3: [2,2], i4: [2,3], i5: [2,4]})
				countCell7Row4({rowsArr, i:[3,6], i1: [4,0], i2: [4,1], i3: [4,2], i4: [4,3], i5: [4,4]})
				countCell7Row6({rowsArr, i:[5, 6], 
					i1:[5, 0] , i2:[5, 1] , i3:[5, 2] , i4:[5, 3] , i5: [5, 4], 
					i6: [16,0], i7: [16,1], i8: [16,2], i9: [16,3], i10: [16,4]})

			} else if(el.id === 'revenue-curr-4' || el.id === 'revenue-prev-4' || el.id === 'satisfaction-weight-4' || el.id === 'client-profitability-4') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-4', s2: 'revenue-prev-4' })
				drawRow2({obj, rowsArr, i: [1,3], s1: 'revenue-curr-4', s2: 'revenue-prev-4' })
				countRow4({obj, rowsArr, i: [3,3], i2: [0,3], s1: 'revenue-prev-4', s2: 'satisfaction-weight-4' })
				countRow6({obj, rowsArr, i: [5,3], i2: [1,3], i3: [3,3], s1: 'satisfaction-weight-4'})
				countRow10({obj, rowsArr, i: [9,3], i2: [8,3], s1: 'revenue-prev-4'})
				countRow12({obj, rowsArr, i: [11, 3], i2: [9,3], i3: [3,3], s1: 'client-profitability-4'})
				countRow14({obj, rowsArr, i: [13, 3], i2: [9, 3], i3: [11,3]})
				countRow17({obj, rowsArr, i: [16, 3], i2: [13, 3]})
				countRow3({obj, rowsArr, i: [2,3], i2: [16,3], i3: [1,3]})
				countRow5({obj, rowsArr, i: [4,3], i2: [16,3], i3: [3,3]})
				countRow11({obj, rowsArr, i: [10,3], i2: [16,4], i3: [9,3]})
				countRow13({ rowsArr, i: [12, 3], i2: [16, 3], i3: [11,3]})
				countCell6Row2({rowsArr, i: [1,5], i1: [1, 0], i2: [1, 1], i3: [1, 2], i4: [1, 3], i5: [1, 4]})
				countCell6Row4({rowsArr, i: [3,5], i1: [3, 0], i2: [3, 1], i3: [3, 2], i4: [3, 3], i5: [3, 4]})
				countCell6Row6({rowsArr, i: [5, 5], i1: [1,5], i2: [3,5]})
				countCell6Row10({rowsArr, i: [9,5], i1: [9, 0], i2: [9, 1], i3: [9, 2], i4: [9, 3], i5: [9, 4]})
				countCell6Row12({rowsArr, i: [11,5], i1: [11, 0], i2: [11, 1], i3: [11, 2], i4: [11, 3], i5: [11, 4]})
				countCell6Row14({rowsArr, i:[13,5], i1: [9,5], i2:[11,5]})
				countRow15({obj, rowsArr, i: [14, 3], i2: [16, 3], s1: 'satisfaction-curr-4', s2: 'revenue-prev-4'})
				countRow16({obj, rowsArr, i: [15, 3], i2: [16, 3], s1: 'satisfaction-wanted-4', s2: 'revenue-curr-4'})
				countCell6Row17({rowsArr, i: [16, 5], i2: [13, 5]})
				countCell7Row1({obj, rowsArr, 
				i:[0,6], i1:[15, 0], i2:[15, 1], i3:[15, 2], i4:[15, 3], i5:[15, 4], i6:[14, 0], i7:[14, 1], i8:[14, 2], i9:[14, 3], i10:[14, 4],
				s1: 'revenue-curr-1', s2: 'revenue-curr-2', s3: 'revenue-curr-3', s4: 'revenue-curr-4', s5: 'revenue-curr-5',
				s6: 'revenue-prev-1', s7: 'revenue-prev-2', s8: 'revenue-prev-3', s9: 'revenue-prev-4', s10: 'revenue-prev-5'
			})
				countCell7Row2({rowsArr, i:[1,6], i1: [2,0], i2: [2,1], i3: [2,2], i4: [2,3], i5: [2,4]})
				countCell7Row4({rowsArr, i:[3,6], i1: [4,0], i2: [4,1], i3: [4,2], i4: [4,3], i5: [4,4]})
				countCell7Row6({rowsArr, i:[5, 6], 
					i1:[5, 0] , i2:[5, 1] , i3:[5, 2] , i4:[5, 3] , i5: [5, 4], 
					i6: [16,0], i7: [16,1], i8: [16,2], i9: [16,3], i10: [16,4]})

			} else if(el.id === 'revenue-curr-5' || el.id === 'revenue-prev-5' || el.id === 'satisfaction-weight-5' || el.id === 'client-profitability-5') {

				countRow2({obj, rowsArr, s1: 'revenue-curr-5', s2: 'revenue-prev-5' })
				drawRow2({obj, rowsArr, i: [1,4], s1: 'revenue-curr-5', s2: 'revenue-prev-5' })
				countRow4({obj, rowsArr, i: [3,4], i2: [0,4], s1: 'revenue-prev-5', s2: 'satisfaction-weight-5'})
				countRow6({obj, rowsArr, i: [5,4], i2: [1,4], i3: [3,4], s1: 'satisfaction-weight-5'})
				countRow10({obj, rowsArr, i: [9,4], i2: [8,4], s1: 'revenue-prev-5'})
				countRow12({obj, rowsArr, i: [11, 4], i2: [9,4], i3: [3,4], s1: 'client-profitability-5'})
				countRow14({obj, rowsArr, i: [13, 4], i2: [9, 4], i3: [11,4]})
				countRow17({obj, rowsArr, i: [16, 4], i2: [13, 4]})
				countRow3({obj, rowsArr, i: [2,4], i2: [16,4], i3: [1,4]})
				countRow5({obj, rowsArr, i: [4,4], i2: [16,4], i3: [3,4]})
				countRow11({obj, rowsArr, i: [10,4], i2: [16,4], i3: [9,4]})
				countRow13({ rowsArr, i: [12, 4], i2: [16, 4], i3: [11,4]})
				countCell6Row2({rowsArr, i: [1,5], i1: [1, 0], i2: [1, 1], i3: [1, 2], i4: [1, 3], i5: [1, 4]})
				countCell6Row4({rowsArr, i: [3,5], i1: [3, 0], i2: [3, 1], i3: [3, 2], i4: [3, 3], i5: [3, 4]})
				countCell6Row6({rowsArr, i: [5, 5], i1: [1,5], i2: [3,5]})
				countCell6Row10({rowsArr, i: [9,5], i1: [9, 0], i2: [9, 1], i3: [9, 2], i4: [9, 3], i5: [9, 4]})
				countCell6Row12({rowsArr, i: [11,5], i1: [11, 0], i2: [11, 1], i3: [11, 2], i4: [11, 3], i5: [11, 4]})
				countCell6Row14({rowsArr, i:[13,5], i1: [9,5], i2:[11,5]})
				countRow15({obj, rowsArr, i: [14, 4], i2: [16, 4], s1: 'satisfaction-curr-5', s2: 'revenue-prev-5'})
				countRow16({obj, rowsArr, i: [15, 4], i2: [16, 4], s1: 'satisfaction-wanted-5', s2: 'revenue-curr-5'})
				countCell6Row17({rowsArr, i: [16, 5], i2: [13, 5]})
				countCell7Row1({obj, rowsArr, 
				i:[0,6], i1:[15, 0], i2:[15, 1], i3:[15, 2], i4:[15, 3], i5:[15, 4], i6:[14, 0], i7:[14, 1], i8:[14, 2], i9:[14, 3], i10:[14, 4],
				s1: 'revenue-curr-1', s2: 'revenue-curr-2', s3: 'revenue-curr-3', s4: 'revenue-curr-4', s5: 'revenue-curr-5',
				s6: 'revenue-prev-1', s7: 'revenue-prev-2', s8: 'revenue-prev-3', s9: 'revenue-prev-4', s10: 'revenue-prev-5'
			})
				countCell7Row2({rowsArr, i:[1,6], i1: [2,0], i2: [2,1], i3: [2,2], i4: [2,3], i5: [2,4]})
				countCell7Row4({rowsArr, i:[3,6], i1: [4,0], i2: [4,1], i3: [4,2], i4: [4,3], i5: [4,4]})
				countCell7Row6({rowsArr, i:[5, 6], 
					i1:[5, 0] , i2:[5, 1] , i3:[5, 2] , i4:[5, 3] , i5: [5, 4], 
					i6: [16,0], i7: [16,1], i8: [16,2], i9: [16,3], i10: [16,4]})

			}





				
				
			let commonSatisfactionPrev = calcCommonSatisfactionPrevAndCurrAndWanted({obj,
				s1: 'satisfaction-prev-1', r1: 'revenue-prev-1', 
				s2: 'satisfaction-prev-2', r2: 'revenue-prev-2', 
				s3: 'satisfaction-prev-3', r3: 'revenue-prev-3', 
				s4: 'satisfaction-prev-4', r4: 'revenue-prev-4',
				s5: 'satisfaction-prev-5', r5: 'revenue-prev-5'}, calcPrevRevenueSumm)


			let commonSatisfactionCurr = calcCommonSatisfactionPrevAndCurrAndWanted({obj,
				s1: 'satisfaction-curr-1', r1: 'revenue-prev-1', 
				s2: 'satisfaction-curr-2', r2: 'revenue-prev-2', 
				s3: 'satisfaction-curr-3', r3: 'revenue-prev-3', 
				s4: 'satisfaction-curr-4', r4: 'revenue-prev-4',
				s5: 'satisfaction-curr-5', r5: 'revenue-prev-5'}, calcPrevRevenueSumm)


			let commonSatisfactionWanted = calcCommonSatisfactionPrevAndCurrAndWanted({obj,
				s1: 'satisfaction-wanted-1', r1: 'revenue-curr-1', 
				s2: 'satisfaction-wanted-2', r2: 'revenue-curr-2', 
				s3: 'satisfaction-wanted-3', r3: 'revenue-curr-3', 
				s4: 'satisfaction-wanted-4', r4: 'revenue-curr-4',
				s5: 'satisfaction-wanted-5', r5: 'revenue-curr-5'}, calcCurrRevenueSumm)

				countCell6Row1({rowsArr, i: [0,5], n1:commonSatisfactionCurr, n2:commonSatisfactionPrev})
			
				
				

			


				}
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
	// console.log('dffdf')
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


function countRow3({obj, rowsArr, i, i2, i3}){


	let str = rowsArr[i2[0]][i2[1]].textContent


	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? +rowsArr[i3[0]][i3[1]].textContent : 0

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow4({obj, rowsArr, i, i2, s1, s2}){

	obj[s1] = +obj[s1] || 0
	obj[s2] = +obj[s2] || 5

	let multiplier = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/g, '')

	rowsArr[i[0]][i[1]].textContent = ((multiplier * obj[s1] * obj[s2])/10000).toFixed(2)

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow5({obj, rowsArr, i, i2, i3}){


	let str = rowsArr[i2[0]][i2[1]].textContent

	// console.log(str)

	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? +rowsArr[i3[0]][i3[1]].textContent : 0

	return

}



////////////////////////////////////////////////
////////////////////////////////////////////////

function countRow6({obj, rowsArr, i, i2, i3, s1}){

	obj[s1] = +obj[s1] || 5
	
	let divided = +rowsArr[i3[0]][i3[1]].textContent.replace(/[^-.\d]/g, '')
	let divider = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/g, '')


	// console.log('Divided:', divided)
	// console.log('Divider:', divider)


	if(divider === 0) {
		rowsArr[i[0]][i[1]].textContent = obj[s1] + '%'
	} else {
		rowsArr[i[0]][i[1]].textContent = ((divided/divider) * 100).toFixed(2) + '%'
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

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/gi, "")


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

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/gi, "")
	let number2 = +rowsArr[i3[0]][i3[1]].textContent.replace(/[^-.\d]/gi, "")

	// console.log(number)
	// console.log(number2)
	rowsArr[i[0]][i[1]].textContent = ((number * number2) / 10).toFixed(4) + "%"

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow10({obj, rowsArr, i, i2, s1}){

	obj[s1] = +obj[s1] || 0

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/gi, "")

	rowsArr[i[0]][i[1]].textContent = ((number * obj[s1]) / 100).toFixed(5)

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow11({obj, rowsArr, i, i2, i3}){


	let str = rowsArr[i2[0]][i2[1]].textContent

	// console.log(str)

	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? +rowsArr[i3[0]][i3[1]].textContent : 0

	return

}



////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow12({obj, rowsArr, i, i2, i3, s1}){
	// console.log('yes')

	obj[s1] = +obj[s1]/100 || 0

	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/gi, "")
	let number2 = +rowsArr[i3[0]][i3[1]].textContent.replace(/[^-.\d]/gi, "")

	// console.log('Number2:', number2)
	// console.log('Obj[s1]', +obj[s1])
	// console.log('Number', number)

	rowsArr[i[0]][i[1]].textContent = (number2 * obj[s1] - number).toFixed(4)

	return

}

////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow13({rowsArr, i, i2, i3}){


	let str = rowsArr[i2[0]][i2[1]].textContent

	// console.log(str)

	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? +rowsArr[i3[0]][i3[1]].textContent : 0

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow14({obj, rowsArr, i, i2, i3}){

	let res
	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/[^-.\d]/gi, "")
	let number2 = +rowsArr[i3[0]][i3[1]].textContent.replace(/[^-.\d]/gi, "")


	// console.log(number, number2)


	if(number === 0){
		res = 0
	}
	else{
		res = number2 / number
	}

	rowsArr[i[0]][i[1]].textContent = (res * 100).toFixed(0) + '%'

	return

}

////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow15({obj, rowsArr, i, i2, s1, s2}){

	obj[s1] = +obj[s1] || 20
	obj[s2] = +obj[s2] || 0

	let str = rowsArr[i2[0]][i2[1]].textContent

	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? obj[s1] * obj[s2] : 0

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countRow16({obj, rowsArr, i, i2, s1, s2}){

	obj[s1] = +obj[s1] || 20
	obj[s2] = +obj[s2] || 0

	let str = rowsArr[i2[0]][i2[1]].textContent

	rowsArr[i[0]][i[1]].textContent = str === 'подходит' ? obj[s1] * obj[s2] : 0

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function countRow17({rowsArr, i, i2}){

	let res
	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/%/gi, "")

	// console.log(number)


	if(number >= 100){
		res = 1
	}
	else{
		res = 0
	}

	rowsArr[i[0]][i[1]].textContent = res === 1 ? 'подходит' : 'не подходит'

	res === 1 ? rowsArr[i[0]][i[1]].classList.add('is') :  rowsArr[i[0]][i[1]].classList.remove('is')

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////



function calcPrevRevenueSumm() {

	return +document.querySelector('.input-curr').value
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function calcCurrRevenueSumm() {

	return +document.querySelector('.input-want').value
}


////////////////////////////////////////////////
////////////////////////////////////////////////



function calcCommonSatisfactionPrevAndCurrAndWanted({obj, s1, r1, s2, r2, s3, r3, s4, r4, s5, r5}, func) {


	obj[s1] = +obj[s1] || 20
	obj[s2] = +obj[s2] || 20
	obj[s3] = +obj[s3] || 20
	obj[s4] = +obj[s4] || 20
	obj[s5] = +obj[s5] || 20


	obj[r1] = +obj[r1] || 0
	obj[r2] = +obj[r2] || 0
	obj[r3] = +obj[r3] || 0
	obj[r4] = +obj[r4] || 0
	obj[r5] = +obj[r5] || 0


	// let obj2 = {
	// 	'obj[s1]': obj[s1],
	// 	'obj[s2]': obj[s2],
	// 	'obj[s3]': obj[s3],
	// 	'obj[s4]': obj[s4],
	// 	'obj[s5]': obj[s5],
	// 	'obj[r1]': obj[r1],
	// 	'obj[r2]': obj[r2],
	// 	'obj[r3]': obj[r3],
	// 	'obj[r4]': obj[r4],
	// 	'obj[r5]': obj[r5],
	// }

	// console.log(obj2)

	// console.log('obj[s1] * obj[r1]:', (obj[s1] * obj[r1]));
	// console.log('obj[r1]:', obj[r1]);

	// console.log('obj[s1] * obj[r1]  :', (obj[s1] * obj[r1]) + (obj[s2] * obj[r2]) + (obj[s3] * obj[r3]) + (obj[s4] * obj[r4]) + (obj[s5] * obj[r5]))

	let res = Math.round(((obj[s1] * obj[r1]) + (obj[s2] * obj[r2]) + (obj[s3] * obj[r3]) + (obj[s4] * obj[r4]) + (obj[s5] * obj[r5])) / func())
	return  res
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row1({i, rowsArr, n1, n2}){
	// console.log()
		n1 = +n1 || 0
		n2 = +n2 || 0

		rowsArr[i[0]][i[1]].textContent = n1 - n2 + '%'

		return 
}




////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row2({rowsArr, i, i1, i2, i3, i4, i5}){


		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
		let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
		let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
		let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

		let res = r1 + r2 + r3 + r4 + r5
		// console.log(res)

		rowsArr[i[0]][i[1]].textContent = res

		return 
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row4({rowsArr, i, i1, i2, i3, i4, i5}){

	
		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
		let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
		let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
		let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

		let res = r1 + r2 + r3 + r4 + r5
		// console.log(res)

		rowsArr[i[0]][i[1]].textContent = res.toFixed(2)

		return 
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row6({rowsArr, i, i1, i2}){

		let res;
		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0

		if (r1 === 0) {
			res = 0
		} else {
			res = (r2/r1) * 100
		}


		rowsArr[i[0]][i[1]].textContent = res.toFixed(2) + '%'

		return 
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row10({rowsArr, i, i1, i2, i3, i4, i5}){

	
		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
		let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
		let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
		let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

		let res = r1 + r2 + r3 + r4 + r5
		// console.log(res)

		rowsArr[i[0]][i[1]].textContent = res.toFixed(4)

		return 
}



////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row12({rowsArr, i, i1, i2, i3, i4, i5}){

	
		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
		let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
		let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
		let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

		let res = r1 + r2 + r3 + r4 + r5
		// console.log(res)

		rowsArr[i[0]][i[1]].textContent = res.toFixed(4)

		return 
}



////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row14({rowsArr, i, i1, i2}){

		let res
		let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
		let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0


		if(r1 === 0){
			res = 0
		}
		else{
			res = (r2/r1) * 100
		}
		rowsArr[i[0]][i[1]].textContent = res.toFixed(2) + "%"

		return 
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell6Row17({rowsArr, i, i2}){
	let res
	let number = +rowsArr[i2[0]][i2[1]].textContent.replace(/%/gi, "")


	if(number >= 100){
		res = 1
	}
	else{
		res = 0
	}

	rowsArr[i[0]][i[1]].textContent = res === 1 ? 'подходит' : 'не подходит'

	res === 1 ? rowsArr[i[0]][i[1]].classList.add('is') :  rowsArr[i[0]][i[1]].classList.remove('is')

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell7Row1({
	obj, 
	rowsArr, 
	i,i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,
	s1,s2,s3,s4,s5,s6,s7,s8,s9,s10
}){


	let res = 0;
	let res2 = 0;

	obj[s1] = +obj[s1] || 0
	obj[s2] = +obj[s2] || 0
	obj[s3] = +obj[s3] || 0
	obj[s4] = +obj[s4] || 0
	obj[s5] = +obj[s5] || 0
	obj[s6] = +obj[s6] || 0
	obj[s7] = +obj[s7] || 0
	obj[s8] = +obj[s8] || 0
	obj[s9] = +obj[s9] || 0
	obj[s10] = +obj[s10] || 0

	let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
	let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
	let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
	let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
	let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0
	let r6 = +rowsArr[i6[0]][i6[1]].textContent || 0
	let r7 = +rowsArr[i7[0]][i7[1]].textContent || 0
	let r8 = +rowsArr[i8[0]][i8[1]].textContent || 0
	let r9 = +rowsArr[i9[0]][i9[1]].textContent || 0
	let r10 = +rowsArr[i10[0]][i10[1]].textContent || 0


	if(r1 > 0) {
		res += obj[s1]
	}

	if(r2 > 0) {
		res += obj[s2]
	}

	if(r3 > 0) {
		res += obj[s3]
	}

	if(r4 > 0) {
		res += obj[s4]
	}

	if(r5 > 0) {
		res += obj[s5]
	}

	if(r6 > 0) {
		res2 += obj[s6]
	}

	if(r7 > 0) {
		res2 += obj[s7]
	}

	if(r8 > 0) {
		res2 += obj[s8]
	}

	if(r9 > 0) {
		res2 += obj[s9]
	}

	if(r10 > 0) {
		res2 += obj[s10]
	}


	let output = isNaN((((r1 + r2 + r3 + r4 + r5)/res) - ((r6 + r7 + r8 + r9 + r10)/res2))) ?  0 + '%' : (((r1 + r2 + r3 + r4 + r5)/res) - ((r6 + r7 + r8 + r9 + r10)/res2)) + '%'
	console.log(obj[s1])

	rowsArr[i[0]][i[1]].textContent = output

	return

}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell7Row2({rowsArr, i, i1, i2, i3, i4, i5}){

	let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
	let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
	let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
	let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
	let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

	let res = r1 + r2 + r3 + r4 + r5


	rowsArr[i[0]][i[1]].textContent = res


	return
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell7Row4({rowsArr, i, i1, i2, i3, i4, i5}){

	let r1 = +rowsArr[i1[0]][i1[1]].textContent || 0
	let r2 = +rowsArr[i2[0]][i2[1]].textContent || 0
	let r3 = +rowsArr[i3[0]][i3[1]].textContent || 0
	let r4 = +rowsArr[i4[0]][i4[1]].textContent || 0
	let r5 = +rowsArr[i5[0]][i5[1]].textContent || 0

	let res = r1 + r2 + r3 + r4 + r5


	rowsArr[i[0]][i[1]].textContent = res


	return
}


////////////////////////////////////////////////
////////////////////////////////////////////////


function countCell7Row6({rowsArr, i, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10}){

	let res = 0

	let r1 = +rowsArr[i1[0]][i1[1]].textContent.replace(/%/gi, "") || 0
	let r2 = +rowsArr[i2[0]][i2[1]].textContent.replace(/%/gi, "") || 0
	let r3 = +rowsArr[i3[0]][i3[1]].textContent.replace(/%/gi, "") || 0
	let r4 = +rowsArr[i4[0]][i4[1]].textContent.replace(/%/gi, "") || 0
	let r5 = +rowsArr[i5[0]][i5[1]].textContent.replace(/%/gi, "") || 0


	let r6 = rowsArr[i6[0]][i6[1]].textContent.trim()
	let r7 = rowsArr[i7[0]][i7[1]].textContent.trim()
	let r8 = rowsArr[i8[0]][i8[1]].textContent.trim()
	let r9 = rowsArr[i9[0]][i9[1]].textContent.trim()
	let r10 = rowsArr[i10[0]][i10[1]].textContent.trim()


	if(r6 === 'подходит') {
		r += r1
	}

	if(r7 === 'подходит') {
		r += r2
	}

	if(r8 === 'подходит') {
		r += r3
	}

	if(r9 === 'подходит') {
		r += r4
	}

	if(r10 === 'подходит') {
		r += r5
	}


	rowsArr[i[0]][i[1]].textContent = res + '%'

	return
}





export {
	observeSliders
}