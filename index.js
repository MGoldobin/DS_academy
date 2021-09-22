const form = document.querySelector('.question__form')
const btnForm = form.querySelector('.question__button')
const nameInput = form.querySelector('#questionName')
const numberInput = form.querySelector('#questionNumber')
const emailInput = form.querySelector('#questionEmail')

const urlPost="https://60376bfd5435040017722533.mockapi.io/formRej"


nameInput.addEventListener('change', (e) => {
	e.preventDefault()
	if(!nameInput.value) {
		nameInput.classList.add('question__input_error')
	} else {
		nameInput.classList.remove('question__input_error')
	}
})

numberInput.addEventListener('change', (e) => {
	e.preventDefault()
	if(!numberInput.value) {
		numberInput.classList.add('question__input_error')
	} else {
		numberInput.classList.remove('question__input_error')
	}
})

emailInput.addEventListener('change', (e) => {
	e.preventDefault()
	if(!emailInput.value) {
		emailInput.classList.add('question__input_error')
	} else {
		emailInput.classList.remove('question__input_error')
	}
})

form.addEventListener('change', (e) => {
	e.preventDefault()
	if(nameInput.value&&numberInput.value&&emailInput.value)
	{
		btnForm.classList.remove('question__button_disabled')
		btnForm.disabled = false
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			const formData = new FormData(form)
			const response = fetch(
				'https://60376bfd5435040017722533.mockapi.io/form',
				{
					method: 'POST',
					body: formData
				});
				if(response.ok) {
					let result = response.json()
					console.log(result)
					form.reset()
				} else {
					alert("error")
					console.log("error")
				}
		})
	} else {
		btnForm.classList.add('question__button_disabled')
		btnForm.disabled = true
	}
})
