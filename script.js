const stations = document.querySelectorAll('.station')
stations.forEach((station) => {
    station.addEventListener('click', () => {
        if (station.classList.contains('background')) {
            station.classList.remove('background')
        } else {
            stations.forEach((item) => {
                item.classList.remove('background')
            })
            station.classList.add('background')
        }
    })
})
stations[0].addEventListener('click', () => {
    document.querySelector('.bill--subtitle__span').textContent = `AI95`
})
stations[1].addEventListener('click', () => {
    document.querySelector('.bill--subtitle__span').textContent = `AI98`
})
stations[2].addEventListener('click', () => {
    document.querySelector('.bill--subtitle__span').textContent = `AI100`
})
const vat = 0.05

const inputAI95 = document.querySelector("#ai95")
const inputAI98 = document.querySelector("#ai98")
const inputAI100 = document.querySelector("#ai100")
const totalInput = document.querySelector('.total--input')
function change() {
    document.querySelector('.bill--subtitle__liters').textContent = `${totalInput.value}L`
    document.querySelector('.bill--subtitle__price').textContent = `${inputAI95.value}$`
    document.querySelector('.total--price').textContent = `Total price: ${Math.round(inputAI95.value * totalInput.value + inputAI95.value * totalInput.value * vat)}$`
}
function change2() {
    document.querySelector('.bill--subtitle__liters').textContent = `${totalInput.value}L`
    document.querySelector('.bill--subtitle__price').textContent = `${inputAI98.value}$`
    document.querySelector('.total--price').textContent = `Total price: ${Math.round(inputAI98.value * totalInput.value + inputAI95.value * totalInput.value * vat)}$`
}
function change3() {
    document.querySelector('.bill--subtitle__liters').textContent = `${totalInput.value}L`
    document.querySelector('.bill--subtitle__price').textContent = `${inputAI100.value}$`
    document.querySelector('.total--price').textContent = `Total price: ${Math.round(inputAI100.value * totalInput.value + inputAI95.value * totalInput.value * vat)}$`
}








