import './style.css'

const app = document.querySelector('[data-js="app"]');
      app.innerHTML = `
           <h1>B. Academy</h1>
           <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
      `
const link = document.querySelector('[data-js="link"]')

link.addEventListener('click', (e)=>{
  e.preventDefault();
  app.classList.contains('hidden') === true ?  show(): hide()
})

const show = () => {
  app.classList.remove('hidden')
  link.innerHTML='ESCONDER'
}

const hide = () => {
  app.classList.add('hidden')
  link.innerHTML='EXIBIR'
}


