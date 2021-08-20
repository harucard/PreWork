import './style.css'

const input = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form"]')
const select = document.createElement('select')
const color_container = document.createElement('div')

const prepositions = ["de", "da", "do", "dos"]
const options = [
  {label:"Azul",value:"#0000FF"},
  {label:"Amarelo",value:"#FFFF00"},
  {label:"Verde",value:"#00FF00"},
  {label:"Vermelho",value:"#FF0000"},
  {label:"Marrom",value:"#964B00"}
]

select.setAttribute('multiple','')
color_container.style.display = "flex"
input.style.display = "block"
input.style.marginBottom = "10px"

//Exercicio 01
input.addEventListener('input', (e) => {
  const stringArray = e.target.value.split(' ');
  const captalizedString = stringArray.map((word) => {
    if (!prepositions.includes(word.toLowerCase())) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    } else {
      return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
    }

  })
  e.target.value = captalizedString.join(' ')

})

form.addEventListener('submit', (e) => {
  e.preventDefault()
})
//Exercicio 02
options.map((option)=>{
  const select_option = document.createElement('option')
  select_option.value = option.value
  select_option.innerHTML = option.label
  select.appendChild(select_option)
})
form.appendChild(select)

select.addEventListener('change', (event)=> {
  //removendo todas as div's para renderizar novamente
  while(color_container.firstChild) {
    color_container.removeChild(color_container.firstChild);
  }
  let getColors = [];
  console.log(event.target.options)
  
  Array.from(event.target.options).map((option,index)=> {
    if(option.selected)
    getColors = [...getColors,option.value]
  })
  getColors.map((color)=> {
    const square = document.createElement('div')
    square.setAttribute('class','square')
    square.style.backgroundColor = color
    color_container.appendChild(square)
  })
  form.append(color_container)
  
})





