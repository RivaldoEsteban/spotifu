const cotorro = document.getElementById('cotorros')
const modalPhone = document.getElementById('responsive-500px')
const printListSong = document.getElementById('nueva-seccion')

cotorro.addEventListener('click' , printNuevaListSong)

function printNuevaListSong(){
  modalPhone.style.display = 'none'
  printListSong.style.display ='block'
}


const newSongList1 = document.getElementById('newsong1')
const newSongList2 = document.getElementById('newsong2')
const newSongList3 = document.getElementById('newsong3')
const newSongList4 = document.getElementById('newsong4')
const newSongList5 = document.getElementById('newsong5')
const newSongList6 = document.getElementById('newsong6')
const newSongList7 = document.getElementById('newsong7')
const newSongList8 = document.getElementById('newsong8')
const newSongList9 = document.getElementById('newsong9')
const newSongList10 = document.getElementById('newsong10')
const newSongList11 = document.getElementById('newsong11')
const newSongList12 = document.getElementById('newsong12')

const newIconplay1 = document.getElementById('newIcon1')
const newIconplay2 = document.getElementById('newIcon2')
const newIconplay3 = document.getElementById('newIcon3')
const newIconplay4 = document.getElementById('newIcon4')
const newIconplay5 = document.getElementById('newIcon5')
const newIconplay6 = document.getElementById('newIcon6')
const newIconplay7 = document.getElementById('newIcon7')
const newIconplay8 = document.getElementById('newIcon8')
const newIconplay9 = document.getElementById('newIcon9')
const newIconplay10 = document.getElementById('newIcon10')
const newIconplay11 = document.getElementById('newIcon11')
const newIconplay12 = document.getElementById('newIcon12')

newIconplay1.addEventListener('click' ,reproducirNewSong1, false)
newIconplay2.addEventListener('click' ,reproducirNewSong2, false)
newIconplay3.addEventListener('click' ,reproducirNewSong3, false)
newIconplay4.addEventListener('click' ,reproducirNewSong4, false)
newIconplay5.addEventListener('click' ,reproducirNewSong5, false)
newIconplay6.addEventListener('click' ,reproducirNewSong6, false)
newIconplay7.addEventListener('click' ,reproducirNewSong7, false)
newIconplay8.addEventListener('click' ,reproducirNewSong8, false)
newIconplay9.addEventListener('click' ,reproducirNewSong9, false)
newIconplay10.addEventListener('click' ,reproducirNewSong10, false)
newIconplay11.addEventListener('click' ,reproducirNewSong11, false)
newIconplay12.addEventListener('click' ,reproducirNewSong12, false)
//a mi
function reproducirNewSong1 () {
  reproducir1(newSongList1, newIconplay1)
}
function reproducirNewSong2 () {
  reproducir1(newSongList2, newIconplay2)
}
function reproducirNewSong3 () {
  reproducir1(newSongList3, newIconplay3)
}
function reproducirNewSong4 () {
  reproducir1(newSongList4, newIconplay4)
}
function reproducirNewSong5 () {
  reproducir1(newSongList5, newIconplay5)
}
function reproducirNewSong6 () {
  reproducir1(newSongList6, newIconplay6)
}
function reproducirNewSong7 () {
  reproducir1(newSongList7, newIconplay7)
}
function reproducirNewSong8 () {
  reproducir1(newSongList8, newIconplay8)
}
function reproducirNewSong9 () {
  reproducir1(newSongList9, newIconplay9)
}
function reproducirNewSong10 () {
  reproducir1(newSongList10, newIconplay10)
}
function reproducirNewSong11 () {
  reproducir1(newSongList11, newIconplay11)
}
function reproducirNewSong12 () {
  reproducir1(newSongList12, newIconplay12)
}
