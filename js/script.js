const submitBtn = document.querySelector('.submit-btn')
const card = document.querySelector('.card')
const inputs = document.querySelectorAll('input[type=radio]')
const rateValue = document.querySelector('#rate-value')

//handle rate click
const handleRateCheck = (input) => {
  const value = input.value

  //loop over all the values to activate the selected value and the ones less
  inputs.forEach((inputEl) => {
    if (inputEl.value > value) {
      inputEl.parentElement.classList.remove('active')
    } else {
      inputEl.parentElement.classList.add('active')
    }
  })
}
inputs.forEach((input) => {
  input.addEventListener('click', () => handleRateCheck(input))
})

//handle rate submission
const handleSubmit = (e) => {
  e.preventDefault()

  //check if there is a rate selected
  let foundChecked = null
  inputs.forEach((input) => {
    if (input.checked) {
      foundChecked = input
    }
  })
  if (foundChecked) {
    //flip the card in case a rate is selected and display the selected value
    card.classList.toggle('hide-front')
    rateValue.textContent = foundChecked.value
  } else {
    //otherwise shake the input to inform the user
    submitBtn.classList.add('shake')
    setTimeout(() => submitBtn.classList.remove('shake'), 1000)
  }
}

submitBtn.addEventListener('click', handleSubmit)
