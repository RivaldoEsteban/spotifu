const cotorro = document.getElementById('cotorros')
const modalPhone = document.getElementById('responsive-500px')
const printListSong = document.getElementById('nueva-seccion')

cotorro.addEventListener('click' , printNuevaListSong)

function printNuevaListSong(){
  modalPhone.style.display = 'none'
  printListSong.style.display ='block'
}