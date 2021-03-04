const cotorro = document.getElementById('cotorros')
const modalPhone = document.getElementById('responsive-500px')
const printListSong = document.getElementById('nueva-seccion')
const retrocederModal = document.getElementById('retrocederModal')


const printNewmodal1 = document.getElementById('newmodal1')
const printNewmodal2 = document.getElementById('newmodal2')
const printNewmodal3 = document.getElementById('newmodal3')
const printNewmodal4 = document.getElementById('newmodal4')
const printNewmodal5 = document.getElementById('newmodal5')
const printNewmodal6 = document.getElementById('newmodal6')
const printNewmodal7 = document.getElementById('newmodal7')
const printNewmodal8 = document.getElementById('newmodal8')
const printNewmodal9 = document.getElementById('newmodal9')
const printNewmodal10 = document.getElementById('newmodal10')
const printNewmodal11 = document.getElementById('newmodal11')
const printNewmodal12 = document.getElementById('newmodal12')
const printNewmodal13 = document.getElementById('newmodal13')
const printNewmodal14 = document.getElementById('newmodal14')
const printNewmodal15 = document.getElementById('newmodal15')
const printNewmodal16 = document.getElementById('newmodal16')
const printNewmodal17 = document.getElementById('newmodal17')
const printNewmodal18 = document.getElementById('newmodal18')

const iconhome500 = document.getElementById('iconoInicio')
const iconbuscar500 = document.getElementById('iconobuscar')
const iconradio500 = document.getElementById('iconoRadio')

const imageFooter = document.getElementById('img-footer500')
const nameSongFooter = document.getElementById('footer-name-song')
const nameArtistFooter = document.getElementById('footer-artista')

iconhome500.addEventListener('click', volverHome500)
iconbuscar500.addEventListener('click', printNuevaListSong)
iconradio500.addEventListener('click', printNuevaListSong)

cotorro.addEventListener('click' , printNuevaListSong)
retrocederModal.addEventListener('click' , volverHome500)



printNewmodal1.addEventListener('click', printNuevaListSong)
printNewmodal2.addEventListener('click', printNuevaListSong)
printNewmodal3.addEventListener('click', printNuevaListSong)
printNewmodal4.addEventListener('click', printNuevaListSong)
printNewmodal5.addEventListener('click', printNuevaListSong)
printNewmodal6.addEventListener('click', printNuevaListSong)
printNewmodal7.addEventListener('click', printNuevaListSong)
printNewmodal8.addEventListener('click', printNuevaListSong)
printNewmodal9.addEventListener('click', printNuevaListSong)
printNewmodal10.addEventListener('click', printNuevaListSong)
printNewmodal11.addEventListener('click', printNuevaListSong)
printNewmodal12.addEventListener('click', printNuevaListSong)
printNewmodal13.addEventListener('click', printNuevaListSong)
printNewmodal14.addEventListener('click', printNuevaListSong)
printNewmodal15.addEventListener('click', printNuevaListSong)
printNewmodal16.addEventListener('click', printNuevaListSong)
printNewmodal17.addEventListener('click', printNuevaListSong)
printNewmodal18.addEventListener('click', printNuevaListSong)


function printNuevaListSong(){
  modalPhone.style.display = 'none'
  printListSong.style.display ='block'
}

function volverHome500() {
  modalPhone.style.display = 'block'
  printListSong.style.display = 'none'
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
  imageFooter.src ='images/mobile/nicky.jpeg'
  nameSongFooter.textContent = 'Ella no es Tuya - Remix'
  nameArtistFooter.textContent = 'Mike towers,Nicky Nicole'
  reproducir1(newSongList1, newIconplay1)
  newIconplay1.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong2 () {
  imageFooter.src = 'images/mobile/boza.jpeg'
  nameSongFooter.textContent = 'Hecha Pa Mi'
  nameArtistFooter.textContent = 'Boza'
  reproducir1(newSongList2, newIconplay2)
  newIconplay2.style.filter = 'invert(100%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList1.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong3 () {
  imageFooter.src = 'images/mobile/cazzu.jpeg'
  nameSongFooter.textContent = 'Solita - Remix'
  nameArtistFooter.textContent = 'Mechi Pieretti, Cazzu'
  reproducir1(newSongList3, newIconplay3)
  newIconplay3.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList1.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong4 () {
  imageFooter.src = 'images/mobile/dibujame.jpeg'
  nameSongFooter.textContent = 'Dibujame'
  nameArtistFooter.textContent = 'Rich Vagos, Samantha'
  reproducir1(newSongList4, newIconplay4)
  newIconplay4.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList1.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong5 () {
  imageFooter.src = 'images/mobile/endgame.jpeg'
  nameSongFooter.textContent = 'Come and Get Your Love'
  nameArtistFooter.textContent = 'Redbone'
  reproducir1(newSongList5, newIconplay5)
  newIconplay5.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList1.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong6 () {
  imageFooter.src = 'images/mobile/futuro.jpeg'
  nameSongFooter.textContent = 'Life is Good'
  nameArtistFooter.textContent = 'Future, Drake'
  reproducir1(newSongList6, newIconplay6)
  newIconplay6.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList1.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong7 () {
  imageFooter.src = 'images/mobile/londra.jpeg'
  nameSongFooter.textContent = 'Solo Pienso en Ti'
  nameArtistFooter.textContent = 'Paulo Londra, Justin Quiles'
  reproducir1(newSongList7, newIconplay7)
  newIconplay7.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList1.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong8 () {
  imageFooter.src = 'images/mobile/pont_pa_mi.jpeg'
  nameSongFooter.textContent = 'Ponte Pa Mi'
  nameArtistFooter.textContent = 'Justin Quiles'
  reproducir1(newSongList8, newIconplay8)
  newIconplay8.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList1.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong9 () {
  imageFooter.src = 'images/mobile/postmalone.jpg'
  nameSongFooter.textContent = 'Circles'
  nameArtistFooter.textContent = 'Post Malone'
  reproducir1(newSongList9, newIconplay9)
  newIconplay9.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList1.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong10 () {
  imageFooter.src = 'images/mobile/relsb.jpeg'
  nameSongFooter.textContent = 'A Mi'
  nameArtistFooter.textContent = 'Rels B'
  reproducir1(newSongList10, newIconplay10)
  newIconplay10.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList1.pause();
  newSongList11.pause();
  newSongList12.pause();
}
function reproducirNewSong11 () {
  imageFooter.src = 'images/mobile/room.jpeg'
  nameSongFooter.textContent = 'Dancing in my Room'
  nameArtistFooter.textContent = '347 Aidan  '
  reproducir1(newSongList11, newIconplay11)
  newIconplay11.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay12.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newIconplay12.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList1.pause();
  newSongList12.pause();
}
function reproducirNewSong12 () {
  imageFooter.src = 'images/mobile/victoria.jpeg'
  nameSongFooter.textContent = 'Victoria'
  nameArtistFooter.textContent = 'Lunay, Beéle'
  reproducir1(newSongList12, newIconplay12)
  newIconplay12.style.filter = 'invert(100%)'
  newIconplay2.style.filter = 'contrast(20%)'
  newIconplay3.style.filter = 'contrast(20%)'
  newIconplay4.style.filter = 'contrast(20%)'
  newIconplay5.style.filter = 'contrast(20%)'
  newIconplay6.style.filter = 'contrast(20%)'
  newIconplay7.style.filter = 'contrast(20%)'
  newIconplay8.style.filter = 'contrast(20%)'
  newIconplay9.style.filter = 'contrast(20%)'
  newIconplay10.style.filter = 'contrast(20%)'
  newIconplay11.style.filter = 'contrast(20%)'
  newIconplay1.style.filter = 'contrast(20%)'
  newIconplay2.src = 'images/image-proyect/play.svg'
  newIconplay3.src = 'images/image-proyect/play.svg'
  newIconplay4.src = 'images/image-proyect/play.svg'
  newIconplay5.src = 'images/image-proyect/play.svg'
  newIconplay6.src = 'images/image-proyect/play.svg'
  newIconplay7.src = 'images/image-proyect/play.svg'
  newIconplay8.src = 'images/image-proyect/play.svg'
  newIconplay9.src = 'images/image-proyect/play.svg'
  newIconplay10.src = 'images/image-proyect/play.svg'
  newIconplay11.src = 'images/image-proyect/play.svg'
  newIconplay1.src = 'images/image-proyect/play.svg'
  newSongList2.pause();
  newSongList3.pause();
  newSongList4.pause();
  newSongList5.pause();
  newSongList6.pause();
  newSongList7.pause();
  newSongList8.pause();
  newSongList9.pause();
  newSongList10.pause();
  newSongList11.pause();
  newSongList1.pause();
}

