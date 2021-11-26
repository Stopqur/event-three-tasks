let firstBtn = document.querySelector('.first__btn')
secondInput = document.querySelector('.second__input')
thirdInput = document.querySelector('.third__input')
thirdBtn = document.querySelector('.third__btn')

firstBtn.addEventListener('click', () => {
    alert('уря!')
})

secondInput.addEventListener('blur', () => {
    alert('ждем возвращения')
})

thirdBtn.addEventListener('click', (e) => {
    e.preventDefault()
    thirdBtn.innerHTML = thirdInput.value
})