const currencyElementOne = document.getElementById('currency-one')
const currencyElementTwo = document.getElementById('currency-two')
const amountElementOne = document.getElementById('amount-one')
const amountElementTwo = document.getElementById('amount-two')
const rateElement = document.getElementById('rate')
const swap = document.getElementById('swap')

//fetch exchange request

function calculate () {
	const currencyOne = currencyElementOne.value;
	const currencyTwo = currencyElementTwo.value;
	fetch(`https://v6.exchangerate-api.com/v6/6ec032c56316bda26ce9d01c/latest/${currencyOne}`)
	.then(res => res.json() )
	.then(data => {

		const rate = data.conversion_rates[currencyTwo];
		rateElement.innerText = (`1 ${currencyOne} = ${rate} ${currencyTwo}`)
		amountElementTwo.value = (amountElementOne.value * rate).toFixed(2)
	
	})

}



//Event listeners
currencyElementOne.addEventListener('change', calculate)
currencyElementTwo.addEventListener('change', calculate)
amountElementOne.addEventListener('input', calculate)
amountElementTwo.addEventListener('input', calculate)
swap.addEventListener('click', ()=>{
const temp = currencyElementOne.value;
currencyElementOne.value = currencyElementTwo.value;
currencyElementTwo.value = temp;
calculate()
})
calculate()