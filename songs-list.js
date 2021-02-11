const songName1 = document.getElementById('song1')
const songName2 = document.getElementById('song2')
const songName3 = document.getElementById('song3')
const songName4 = document.getElementById('song4')
const songName5 = document.getElementById('song5')
const songName6 = document.getElementById('song6')
const songName7 = document.getElementById('song7')
const songName8 = document.getElementById('song8')
const songName9 = document.getElementById('song9')
const songName10 = document.getElementById('song10')
const songName11 = document.getElementById('song11')
const songName12 = document.getElementById('song12')

const songArtist1 = document.getElementById('artista1')
const songArtist2 = document.getElementById('artista2')
const songArtist3 = document.getElementById('artista3')
const songArtist4 = document.getElementById('artista4')
const songArtist5 = document.getElementById('artista5')
const songArtist6 = document.getElementById('artista6')
const songArtist7 = document.getElementById('artista7')
const songArtist8 = document.getElementById('artista8')
const songArtist9 = document.getElementById('artista9')
const songArtist10 = document.getElementById('artista10')
const songArtist11 = document.getElementById('artista11')
const songArtist12 = document.getElementById('artista12')

const songAlbum1 = document.getElementById('album1')
const songAlbum2 = document.getElementById('album2')
const songAlbum3 = document.getElementById('album3')
const songAlbum4 = document.getElementById('album4')
const songAlbum5 = document.getElementById('album5')
const songAlbum6 = document.getElementById('album6')
const songAlbum7 = document.getElementById('album7')
const songAlbum8 = document.getElementById('album8')
const songAlbum9 = document.getElementById('album9')
const songAlbum10 = document.getElementById('album10')
const songAlbum11 = document.getElementById('album11')
const songAlbum12 = document.getElementById('album12')


const content1 = document.getElementById('1')
const content2 = document.getElementById('2')
const content3 = document.getElementById('3')
const content4 = document.getElementById('4')
const content5 = document.getElementById('5')
const content6 = document.getElementById('6')
const content7 = document.getElementById('7')
const content8 = document.getElementById('8')
const content9 = document.getElementById('9')
const content10 = document.getElementById('10')
const content11 = document.getElementById('11')
const content12 = document.getElementById('12')

const audio1 = document.getElementById('audio1')
const audio2 = document.getElementById('audio2')
const audio3 = document.getElementById('audio3')
const audio4 = document.getElementById('audio4')
const audio5 = document.getElementById('audio5')
const audio6 = document.getElementById('audio6')
const audio7 = document.getElementById('audio7')
const audio8 = document.getElementById('audio8')
const audio9 = document.getElementById('audio9')
const audio10 = document.getElementById('audio10')
const audio11 = document.getElementById('audio11')
const audio12 = document.getElementById('audio12')


const imageSong = document.getElementById('footer-image')
const nameSong = document.getElementById('name-song')
const artista = document.getElementById('cantante')
const reproduction1 = document.getElementById('music1')

const corazonClick = document.getElementById('corazon')
const button = document.getElementById('button-pause')


content1.addEventListener('click' , remplazarSong1)
content2.addEventListener('click' , remplazarSong2)
content3.addEventListener('click' , remplazarSong3)
content4.addEventListener('click' , remplazarSong4)
content5.addEventListener('click' , remplazarSong5)
content6.addEventListener('click' , remplazarSong6)
content7.addEventListener('click' , remplazarSong7)
content8.addEventListener('click' , remplazarSong8)
content9.addEventListener('click' , remplazarSong9)
content10.addEventListener('click' , remplazarSong10)
content11.addEventListener('click' , remplazarSong11)
content12.addEventListener('click' , remplazarSong12)

corazonClick.addEventListener ('click' , colorCorazon)
corazonClick.addEventListener ('dblclick' , removeColor)
button.addEventListener('click',changeColor)


const song1 = {
  name : "Blue Dreams",
  artist : "Mr.Pig Bzars, Sapir Amar",
  album : "Yinyang" ,
  duration : "4:09",
  media: './music/1.mp3',
  cover: './images/cover/1.png'
}



const song2 = {
  name : "Mi Otra Mitad",
  artist : "Manuel Medrano",
  album : "Mi Otra Mitad" ,
  duration : "3:33",
  media: './music/2.mp3',
  cover: './images/cover/2.png'
}
const song3 = {
  name : "Hora Loca",
  artist : "The Change",
  album : "Hora Loca" ,
  duration : "3:29",
  media: './music/3.mp3',
  cover: './images/cover/3.png'
}
const song4 = {
  name : "Better",
  artist : "Valentino khan, Wuki, Roxanna",
  album : "Better" ,
  duration : "4:10",
  media: './music/4.mp3',
  cover: './images/cover/4.png'
}
const song5 = {
  name : "Cuando Me Acerco A Ti",
  artist : "Danny Ocean",
  album : "54+1" ,
  duration : "3:13",
  media: './music/5.mp3',
  cover: './images/cover/5.png'
}
const song6 = {
  name : "La Niña del Volcán",
  artist : "SBM, YoSoyMatt, Eva de Marce",
  album : "La Niña del Volcán",
  duration : "4:30",
  media: './music/6.mp3',
  cover: './images/cover/6.png'
}
const song7 = {
  name : "Latidos",
  artist : "Mr.Pig, BonHaus, Typow",
  album : "Yinyang" ,
  duration : "2:55",
  media: './music/7.mp3',
  cover: './images/cover/7.png',
}
const song8 = {
  name : "Noche Sensorial",
  artist : "Esteman",
  album : "Amor Libre" ,
  duration : "3:21",
  media: './music/8.mp3',
  cover: './images/cover/8.jpeg',
}
const song9 = {
  name : "Gotta Go Home",
  artist : "Boney M.",
  album : "Oceans Of Fantasy" ,
  duration : "3:46",
  media: './music/9.mp3',
  cover: './images/cover/9.jpg'
}
const song10 = {
  name : "Bichota",
  artist : "karol G",
  album : "Bichota" ,
  duration : "2:58",
  media: './music/10.mp3',
  cover: './images/cover/10.png',
}
const song11 = {
  name : "Si Veo a Tu Mamá",
  artist : "Bad Bunny",
  album : "YHLQMDLG" ,
  duration : "2:50",
  media: './music/11.mp3',
  cover: './images/cover/11.png',
}
const song12 = {
  name : "Cuando Me Acerco  A Ti",
  artist : "Danny Ocean",
  album : "54+1" ,
  duration : "3:13",
  media: './music/12.mp3',
  cover: './images/cover/12.jpg'
}

const reproduction1Controls = document.getElementById('pause')


function remplazarSong1() {
  imageSong.src = song1.cover;
  nameSong.textContent = song1.name
  artista.textContent = song1.artist
  changeColor()
  reproducir1(audio1, icon1)
};

function remplazarSong2() {
  imageSong.src = song2.cover;
  nameSong.textContent = song2.name
  artista.textContent = song2.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/2.mp3" id="audio2" autoplay s controls></audio>'
  changeColor()
  reproducir1(audio2, icon2)
};

function remplazarSong3() {
  imageSong.src = song3.cover;
  nameSong.textContent = song3.name
  artista.textContent = song3.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/3.mp3" id="audio3"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio3, icon3)
};
function remplazarSong4() {
  imageSong.src = song4.cover;
  nameSong.textContent = song4.name
  artista.textContent = song4.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/4.mp3" id="audio4"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio4,icon4)
};
function remplazarSong5() {
  imageSong.src = song5.cover;
  nameSong.textContent = song5.name
  artista.textContent = song5.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/5.mp3" id="audio5"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio5,icon5)
};
function remplazarSong6() {
  imageSong.src = song6.cover;
  nameSong.textContent = song6.name
  artista.textContent = song6.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/6.mp3" id="audio6"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio6,icon6)
};
function remplazarSong7() {
  imageSong.src = song7.cover;
  nameSong.textContent = song7.name
  artista.textContent = song7.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/7.mp3" id="audio7"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio7,icon7)
};
function remplazarSong8() {
  imageSong.src = song8.cover;
  nameSong.textContent = song8.name
  artista.textContent = song8.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/8.mp3" id="audio8"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio8,icon8)
}
function remplazarSong9() {
  imageSong.src = song9.cover;
  nameSong.textContent = song9.name
  artista.textContent = song9.artist
  changeColor()
  reproducir1(audio9,icon9)
};
function remplazarSong10() {
  imageSong.src = song10.cover;
  nameSong.textContent = song10.name
  artista.textContent = song10.artist
  changeColor()
  reproducir1(audio10,icon10)
};
function remplazarSong11() {
  imageSong.src = song11.cover;
  nameSong.textContent = song11.name
  artista.textContent = song11.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/11.mp3" id="audio11"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio11,icon11)
};
// audio10.play();
function remplazarSong12() {
  imageSong.src = song12.cover;
  nameSong.textContent = song12.name
  artista.textContent = song12.artist
  // reproduction1Controls.innerHTML = '<audio src="./music/12.mp3" id="audio12"  autoplay controls></audio>'
  changeColor()
  reproducir1(audio12,icon12)
};

function colorCorazon() {
  corazonClick.style.filter = 'invert(100)'
};

function removeColor() {
  corazonClick.style.filter = ' contrast(50%)'
};

function changeColor(){
  button.textContent = 'Pause'
};

const pause = document.getElementById('pause')


function reproducir1(audioN , icono){
  if((audioN.paused == false) && (audioN.ended == false)){
    icono.src = 'images/image-proyect/play.svg'
    pause.src = 'images/image-proyect/play.svg'
    button.textContent= 'Reproducir'
    pause.style.filter = 'invert()'
    audioN.pause();
  } else {
    icono.src = 'images/image-proyect/pause.svg'
    pause.src = 'images/image-proyect/pause.svg'
    button.textContent= 'Pause'
    PerformanceResourceTiming.src = 'images/image-proyect/pause.svg'
    pause.style.filter = 'invert()'
    const play = audioN.play();
  }
}
// function reproducir2(audioN, none){
//   if((audioN.paused == false) && (audioN.ended == false)){
//     pause.src = 'images/image-proyect/play.svg'
//      const pause = none
//   } else {
//     pause.src = 'images/image-proyect/pause.svg'
//      const play = none;
//   }
// }


songName1.textContent = song1.name;
songName2.textContent = song2.name;
songName3.textContent = song3.name;
songName4.textContent = song4.name;
songName5.textContent = song5.name;
songName6.textContent = song6.name;
songName7.textContent = song7.name;
songName8.textContent = song8.name;
songName9.textContent = song9.name;
songName10.textContent = song10.name;
songName11.textContent = song11.name;
songName12.textContent = song12.name;

songArtist1.textContent = song1.artist;
songArtist2.textContent = song2.artist;
songArtist3.textContent = song3.artist;
songArtist4.textContent = song4.artist;
songArtist5.textContent = song5.artist;
songArtist6.textContent = song6.artist;
songArtist7.textContent = song7.artist;
songArtist8.textContent = song8.artist;
songArtist9.textContent = song9.artist;
songArtist10.textContent = song10.artist;
songArtist11.textContent = song11.artist;
songArtist12.textContent = song12.artist;


songAlbum1.textContent = song1.album;
songAlbum2.textContent = song2.album;
songAlbum3.textContent = song3.album;
songAlbum4.textContent = song4.album;
songAlbum5.textContent = song5.album;
songAlbum6.textContent = song6.album;
songAlbum7.textContent = song7.album;
songAlbum8.textContent = song8.album;
songAlbum9.textContent = song9.album;
songAlbum10.textContent = song10.album;
songAlbum11.textContent = song11.album;
songAlbum12.textContent = song12.album;


const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')
const icon3 = document.getElementById('icon3')
const icon4 = document.getElementById('icon4')
const icon5 = document.getElementById('icon5')
const icon6 = document.getElementById('icon6')
const icon7 = document.getElementById('icon7')
const icon8 = document.getElementById('icon8')
const icon9 = document.getElementById('icon9')
const icon10 = document.getElementById('icon10')
const icon11 = document.getElementById('icon11')
const icon12 = document.getElementById('icon12')

icon1.addEventListener ('clik' , remplazarSong1)
icon2.addEventListener ('clik' , remplazarSong2)
icon3.addEventListener ('clik' , remplazarSong3)
icon4.addEventListener ('clik' , remplazarSong4)
icon5.addEventListener ('clik' , remplazarSong5)
icon6.addEventListener ('clik' , remplazarSong6)
icon7.addEventListener ('clik' , remplazarSong7)
icon8.addEventListener ('clik' , remplazarSong8)
icon9.addEventListener ('clik' , remplazarSong9)
icon10.addEventListener ('clik' , remplazarSong10)
icon11.addEventListener ('clik' , remplazarSong11)
icon12.addEventListener ('clik' , remplazarSong12)