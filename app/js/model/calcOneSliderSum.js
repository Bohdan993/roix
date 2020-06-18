import { noUiSlider as n, wNumb } from '../../libs/libs'




const calcSliderSum = (currGroup) => {


let arr = []
let valueArr = new Array(5).fill(0)
let summValueArr = []

	currGroup.forEach((el, ind) => {
		arr.push(el)
	})


	arr.forEach((el, ind, arr) => {
		if(ind !== 0) {
			el.setAttribute('disabled', true);
		}
		el.noUiSlider.on('change', _doSmth)
	})




	function _doSmth(values, handle, unencoded, tap, positions, noUiSlider) {
		let summ = noUiSlider.target.classList.contains('absolute-slider') ? +document.querySelector('.input-curr').value : +document.querySelector('.input-want').value

		
		//Индекс текущего слайдера в массиве
		let index = [...currGroup].findIndex(el => el === this.target) 


		//Убираем дизейбл для следующего слайдера после текущего
		if(index + 1 < arr.length - 1 && +arr[index].noUiSlider.get() > 0) {
			arr[index + 1].removeAttribute('disabled')
		}

	
		//Складываем значение текущего слайдера в массив
		valueArr[index] = +values[handle]



		if(valueArr[index] === 0) {
			let newArr = valueArr.splice(index)
			newArr.fill(0)
			valueArr = valueArr.concat(newArr)
		}



		//Формируем новый массив каждый елемент которого равняется сумме всех предыдущих елементов массива
		summValueArr = valueArr.map((el, ind, arr)=> {
			let slicedArr = arr.slice(0, ind+1)
			let summ = slicedArr.reduce((prev, next)=> prev + next)
			return summ
		})


		// console.log('SummValueArr:', summValueArr, 'Index:', index)
		//Включаем дизейбл для следующих слайдеров после текущего, если текущая сумма всех слайдеров равняеться общей сумме введенной посетителем
		if(summValueArr[index] >= summ) {
			let arr2 = arr.filter((el, ind) => ind !== index && ind > index)
			arr2.forEach(el=> {
				el.setAttribute('disabled', true)
				el.noUiSlider.reset();	
			})
			
		}


		// if(summValueArr[index] === 0) {
		// 	console.log('true')
		// }

		// let arr2 = arr.filter((el, ind) => ind !== index && ind > index)
		// 	arr2.forEach(el=> {
				
		// 	})

		try{


			arr.forEach((el, ind, arr)=> {
				// console.log(summValueArr)
				if(arr[ind].noUiSlider.get() === 'NaN') {
					arr[ind].noUiSlider.reset();	
				}

				if(+arr[index].noUiSlider.get() === 0) {
					// console.log('yes')
					let arr2 = arr.filter((el, ind) => ind !== index && ind > index)

					arr2.forEach(el=> {
						el.querySelector('.slider-area__max-value .slider-area__summ').textContent = 0
						el.noUiSlider.reset();	
					})

					// summValueArr.forEach(el=> {
					// 	el = 0
					// })
				}
				
				// if(ind === 0) {

				// } 
				// else if(ind === arr.length - 1) {

				// }
				// else {

				// }
				console.log(summ)
				arr[0].noUiSlider.updateOptions({
					range: {
						'min': 0,
						'max': summ
					}
				})
				arr[0].querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summ)

				arr[1].noUiSlider.updateOptions({
					range: {
						'min': 0,
						'max': summValueArr[0] ? summ - summValueArr[0] : 1
					},
					start: 0,
				})
				arr[1].querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summValueArr[0] ? summ - summValueArr[0] : 0)

				arr[2].noUiSlider.updateOptions({
					range: {
						'min': 0,
						'max': summValueArr[1] ? summ - summValueArr[1] : 1,

					},
					start: 0,
				})
				arr[2].querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summValueArr[1] ? summ - summValueArr[1] : 0)


				arr[3].noUiSlider.updateOptions({
					range: {
						'min': 0,
						'max': summValueArr[2] ? summ - summValueArr[2] : 1
					},
					start: 0,
				})
				arr[3].querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summValueArr[2] ? summ - summValueArr[2] : 0)


				arr[4].noUiSlider.updateOptions({
					range: {
						'min': 0,
						'max': summValueArr[3] ? summ - (summValueArr[3]) : 1
					},
					start: summValueArr[3] ? summ - (summValueArr[3]) : 0
				})
				arr[4].querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summ - (summValueArr[3])) <= 0 ? 0 : Math.round(summ - (summValueArr[3]))

			})

			// if(index !== 0) {
					// let arr2 = arr.filter((el, ind) => ind !== index && ind > index)
					// // let summValueArr2 = summValueArr.filter((el, ind) => ind !== index && ind > index)

					// // console.log(summValueArr2)
					// // console.log(arr2)
					// console.log(summValueArr)
					// 	arr2.forEach((el, ind)=> {
					// 		el.noUiSlider.updateOptions({
					// 			range: {
					// 					'min': 0,
					// 					'max': summ - summValueArr[index]
					// 			}
					// 		})

					// 		el.querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summ - summValueArr[index])
					// 	})

					// } else {
					// 	let arr2 = arr.filter((el, ind) => ind !== index && ind > index)

					// 		arr2.forEach(el=> {
					// 		el.noUiSlider.updateOptions({
					// 			range: {
					// 					'min': 0,
					// 					'max': summ - summValueArr[index]
					// 			}
					// 		})

					// 		el.querySelector('.slider-area__max-value .slider-area__summ').textContent = Math.round(summ - summValueArr[index])
					// 	})

					// }
				}	catch({message}){

				console.error(message)

				let arr2 = arr.filter((el, ind) => ind !== index && ind > index)

				arr2.forEach(el=> {
					el.querySelector('.slider-area__max-value .slider-area__summ').textContent = 0
					el.noUiSlider.reset();	
				})
		}
	}
}




export {
	calcSliderSum
}