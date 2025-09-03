// your code here
const h3 = document.querySelector("#url")
const name = document.querySelector("#name")
const year = document.querySelector("#year")
const button = document.querySelector("#button")
const handleSubmit = () => {
	h3.innerHTML = `https://localhost:8080/?name=${name.value}&year=${year.value}`
}
button.addEventListener("click", handleSubmit)