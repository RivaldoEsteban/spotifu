
const home = document.getElementById('home')
const explorar = document.getElementById('explorar')
const radio = document.getElementById('radio')
const borde1 = document.getElementById('borde1')
const borde2 = document.getElementById('borde2')
const borde3 = document.getElementById('borde3')

home.addEventListener('click' , () => {
  home.style.color ="white"
  home.style.opacity = '1'
  explorar.style.color = 'gray'
  radio.style.color = 'gray'
  borde1.style.borderLeft = '3px solid #8d038d'
  borde1.style.paddingLeft = '10px'
  borde2.style.borderLeft = 'none'
  borde2.style.paddingLeft = 'none'
  borde3.style.borderLeft = 'none'
  borde3.style.paddingLeft = 'none'

  borde1.style.filter = "invert(100%)"
  borde2.style.filter = "invert(80%)"
  borde3.style.filter = "invert(80%)"
})

explorar.addEventListener('click' , () => {
  explorar.style.color ="white"
  home.style.color = "gray"
  radio.style.color = "gray"
  borde2.style.borderLeft = '3px solid#8d038d'
  borde2.style.paddingLeft = '10px'
  borde1.style.borderLeft = 'none'
  borde1.style.paddingLeft = 'none'
  borde3.style.borderLeft = 'none'
  borde3.style.paddingLeft = 'none'
  borde2.style.filter = "invert(100%)"
  borde3.style.filter = "invert(80%)"
  borde1.style.filter = "invert(80%)"

})

radio.addEventListener('click' , () => {
  radio.style.color ="white"
  home.style.color = "gray"
  explorar.style.color = "gray"
  borde1.style.borderLeft = 'none'
  borde1.style.paddingLeft = 'none'
  borde2.style.borderLeft = 'none'
  borde2.style.paddingLeft = 'none'
  borde3.style.borderLeft = '3px solid #8d038d'
  borde3.style.paddingLeft = '10px'
  borde3.style.filter = "invert(100%)"
  borde2.style.filter = "invert(100%)"
  borde1.style.filter = "invert(100%)"
})