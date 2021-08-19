const input = document.querySelector('[data-js="name"]')
const form = document.querySelector('[data-js="form"]')
const prepositions = ["de","da","do","dos"]

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})

input.addEventListener('input',(e)=>{
  const stringArray = e.target.value.split(' ');
  const captalizedString = stringArray.map((word)=> {
    if(!prepositions.includes(word.toLowerCase())) {
        return word.charAt(0).toUpperCase()+word.slice(1) 
    }else {
        return word.charAt(0).toLowerCase()+word.slice(1)
    }
        
  })
  e.target.value = captalizedString.join(' ')
  
})