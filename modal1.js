const grupo1 = document.getElementById('grupo1')
const grupo2 = document.getElementById('grupo2')
const grupo3 = document.getElementById('grupo3')
const grupo4 = document.getElementById('grupo4')
const grupo5 = document.getElementById('grupo5')
const grupo6 = document.getElementById('grupo6')
const grupo7 = document.getElementById('grupo7')
const grupo8 = document.getElementById('grupo8')
const grupo9 = document.getElementById('grupo9')
const grupo10 = document.getElementById('grupo10')
const grupo11 = document.getElementById('grupo11')
const grupo12 = document.getElementById('grupo12')
const grupo13 = document.getElementById('grupo13')
const grupo14 = document.getElementById('grupo14')
const grupo15 = document.getElementById('grupo15')
const grupo16 = document.getElementById('grupo16')
const grupo17 = document.getElementById('grupo17')
const grupo18 = document.getElementById('grupo18')
const grupo19 = document.getElementById('grupo19')
const grupo20 = document.getElementById('grupo20')
const grupo21 = document.getElementById('grupo21')
const grupo22 = document.getElementById('grupo22')
const grupo23 = document.getElementById('grupo23')
const grupo24 = document.getElementById('grupo24')
const grupo25 = document.getElementById('grupo25')
const grupo26 = document.getElementById('grupo26')
const grupo27 = document.getElementById('grupo27')
const grupo28 = document.getElementById('grupo28')
const grupo29 = document.getElementById('grupo29')
const grupo30 = document.getElementById('grupo30')
const grupo31 = document.getElementById('grupo31')
const grupo32 = document.getElementById('grupo32')
const grupo33 = document.getElementById('grupo33')
const grupo34 = document.getElementById('grupo34')
const grupo35 = document.getElementById('grupo35')
const grupo36 = document.getElementById('grupo36')
const grupo37 = document.getElementById('grupo37')
const grupo38 = document.getElementById('grupo38')
const grupo39 = document.getElementById('grupo39')
const grupo40 = document.getElementById('grupo40')
const grupo41 = document.getElementById('grupo41')
const grupo42 = document.getElementById('grupo42')
const grupo43 = document.getElementById('grupo43')
const grupo44 = document.getElementById('grupo44')
const grupo45 = document.getElementById('grupo45')
const grupo46 = document.getElementById('grupo46')
const grupo47 = document.getElementById('grupo47')
const grupo48  = document.getElementById('grupo48')


const contentGrupo = document.getElementsByClassName('grupo')
const modalHome = document.getElementById('printmodal')
const modalSong = document.getElementById('hero-content')

const inicio = document.getElementById('atras')

grupo1.addEventListener ('click', canciones)
grupo2.addEventListener ('click', canciones)
grupo3.addEventListener ('click', canciones)
grupo4.addEventListener ('click', canciones)
grupo5.addEventListener ('click', canciones)
grupo6.addEventListener ('click', canciones)
grupo7.addEventListener ('click', canciones)
grupo8.addEventListener ('click', canciones)
grupo9.addEventListener ('click', canciones)
grupo10.addEventListener ('click', canciones)
grupo11.addEventListener ('click', canciones)
grupo12.addEventListener ('click', canciones)
grupo13.addEventListener ('click', canciones)
grupo14.addEventListener ('click', canciones)
grupo15.addEventListener ('click', canciones)
grupo16.addEventListener ('click', canciones)
grupo17.addEventListener ('click', canciones)
grupo18.addEventListener ('click', canciones)
grupo19.addEventListener ('click', canciones)
grupo20.addEventListener ('click', canciones)
grupo21.addEventListener ('click', canciones)
grupo22.addEventListener ('click', canciones)
grupo23.addEventListener ('click', canciones)
grupo24.addEventListener ('click', canciones)
grupo25.addEventListener ('click', canciones)
grupo26.addEventListener ('click', canciones)
grupo27.addEventListener ('click', canciones)
grupo28.addEventListener ('click', canciones)
grupo29.addEventListener ('click', canciones)
grupo30.addEventListener ('click', canciones)
grupo31.addEventListener ('click', canciones)
grupo32.addEventListener ('click', canciones)
grupo33.addEventListener ('click', canciones)
grupo34.addEventListener ('click', canciones)
grupo35.addEventListener ('click', canciones)
grupo36.addEventListener ('click', canciones)
grupo37.addEventListener ('click', canciones)
grupo38.addEventListener ('click', canciones)
grupo39.addEventListener ('click', canciones)
grupo40.addEventListener ('click', canciones)
grupo41.addEventListener ('click', canciones)
grupo42.addEventListener ('click', canciones)
grupo43.addEventListener ('click', canciones)
grupo44.addEventListener ('click', canciones)
grupo45.addEventListener ('click', canciones)
grupo46.addEventListener ('click', canciones)
grupo47.addEventListener ('click', canciones)
grupo48.addEventListener ('click', canciones)


const login = document.getElementById('login')
const loginBtn = document.getElementById('login-btn')
const principal = document.getElementById('general-container')
const footer = document.getElementById('general-footer')

loginBtn.addEventListener('click' , modalPrincipal)
function modalPrincipal(){
  login.style.display ='none'
  principal.style.display='flex'
  footer.style.display='flex'
}


explorar.addEventListener('click', canciones)
inicio.addEventListener('click', SeccionDeInicio)
home.addEventListener('click', SeccionDeInicio)

function canciones(){
  modalHome.style.display = 'none'
  modalSong.style.display = 'block'
}

function SeccionDeInicio() {
  modalHome.style.display = 'block'
  modalSong.style.display = 'none'
}




