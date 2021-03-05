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
const songName13 = document.getElementById('song13')
const songName14 = document.getElementById('song14')

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
const songArtist13 = document.getElementById('artista13')
const songArtist14 = document.getElementById('artista14')

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
const songAlbum13 = document.getElementById('album13')
const songAlbum14 = document.getElementById('album14')


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
const content13 = document.getElementById('13')
const content14 = document.getElementById('14')

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
const audio13 = document.getElementById('audio13')
const audio14 = document.getElementById('audio14')




const imageSong = document.getElementById('footer-image')
const nameSong = document.getElementById('name-song')
const artista = document.getElementById('cantante')
const reproduction1 = document.getElementById('music1')

const corazonClick = document.getElementById('corazon')
const button = document.getElementById('button-pause')

const cora1 = document.getElementById('corazon1')
const cora2 = document.getElementById('corazon2')
const cora3 = document.getElementById('corazon3')
const cora4 = document.getElementById('corazon4')
const cora5 = document.getElementById('corazon5')
const cora6 = document.getElementById('corazon6')
const cora7 = document.getElementById('corazon7')
const cora8 = document.getElementById('corazon8')
const cora9 = document.getElementById('corazon9')
const cora10 = document.getElementById('corazon10')
const cora11 = document.getElementById('corazon11')
const cora12 = document.getElementById('corazon12')
const cora13 = document.getElementById('corazon13')
const cora14 = document.getElementById('corazon14')


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
content13.addEventListener('click' , remplazarSong13)
content14.addEventListener('click' , remplazarSong14)

corazonClick.addEventListener ('click' , colorCorazon)
// corazonClick.addEventListener ('dblclick' , removeColor)
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

const song13 = {
  name: " Cuando Te Vi",
  artist: " Greeicy",
  album : "Cuando Te Vi" ,
  duration : "3:10",
  media: './music/13.mp3',
  cover: './images/cover/13.png'
}

const song14 = {
  name : "Antes que salga el sol",
  artist : "Natti Natasha, Prince Royce",
  album : "Antes que salga el sol" ,
  duration : "3:21",
  media: './music/14.mp3',
  cover: './images/cover/14.png'
}
const reproduction1Controls = document.getElementById('pause')

function remplazarSong1() {
  imageSong.src = song1.cover;
  nameSong.textContent = song1.name
  artista.textContent = song1.artist
  changeColor()
  reproducir1(audio1, icon1)
  pause();
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong2() {
  imageSong.src = song2.cover;
  nameSong.textContent = song2.name
  artista.textContent = song2.artist
  changeColor()
  reproducir1(audio2, icon2)
  pause()
  icon1.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};

function remplazarSong3() {
  imageSong.src = song3.cover;
  nameSong.textContent = song3.name
  artista.textContent = song3.artist
  changeColor()
  reproducir1(audio3, icon3)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong4() {
  imageSong.src = song4.cover;
  nameSong.textContent = song4.name
  artista.textContent = song4.artist
  changeColor()
  reproducir1(audio4,icon4)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong5() {
  imageSong.src = song5.cover;
  nameSong.textContent = song5.name
  artista.textContent = song5.artist
  changeColor()
  reproducir1(audio5,icon5)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong6() {
  imageSong.src = song6.cover;
  nameSong.textContent = song6.name
  artista.textContent = song6.artist
  changeColor()
  reproducir1(audio6,icon6)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong7() {
  imageSong.src = song7.cover;
  nameSong.textContent = song7.name
  artista.textContent = song7.artist
  changeColor()
  reproducir1(audio7,icon7)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong8() {
  imageSong.src = song8.cover;
  nameSong.textContent = song8.name
  artista.textContent = song8.artist
  changeColor()
  reproducir1(audio8,icon8)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
}
function remplazarSong9() {
  imageSong.src = song9.cover;
  nameSong.textContent = song9.name
  artista.textContent = song9.artist
  changeColor()
  reproducir1(audio9,icon9)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong10() {
  imageSong.src = song10.cover;
  nameSong.textContent = song10.name
  artista.textContent = song10.artist
  changeColor()
  reproducir1(audio10,icon10)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function remplazarSong11() {
  imageSong.src = song11.cover;
  nameSong.textContent = song11.name
  artista.textContent = song11.artist
  changeColor()
  reproducir1(audio11,icon11)
  pause();
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
// audio10.play();
function remplazarSong12() {
  imageSong.src = song12.cover;
  nameSong.textContent = song12.name
  artista.textContent = song12.artist
  changeColor()
  reproducir1(audio12,icon12)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};

function remplazarSong13() {
  imageSong.src = song13.cover;
  nameSong.textContent = song13.name
  artista.textContent = song13.artist
  changeColor()
  reproducir1(audio13,icon13)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
  icon14.src = 'images/image-proyect/play.svg'
};
function pause() {
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
  audio8.pause();
  audio9.pause();
  audio10.pause();
  audio11.pause();
  audio12.pause();
}
function remplazarSong14() {
  imageSong.src = song14.cover;
  nameSong.textContent = song14.name
  artista.textContent = song14.artist
  changeColor()
  reproducir1(audio14,icon14)
  pause()
  icon2.src = 'images/image-proyect/play.svg'
  icon3.src = 'images/image-proyect/play.svg'
  icon4.src = 'images/image-proyect/play.svg'
  icon5.src = 'images/image-proyect/play.svg'
  icon6.src = 'images/image-proyect/play.svg'
  icon7.src = 'images/image-proyect/play.svg'
  icon8.src = 'images/image-proyect/play.svg'
  icon9.src = 'images/image-proyect/play.svg'
  icon10.src = 'images/image-proyect/play.svg'
  icon11.src = 'images/image-proyect/play.svg'
  icon12.src = 'images/image-proyect/play.svg'
  icon13.src = 'images/image-proyect/play.svg'
  icon1.src = 'images/image-proyect/play.svg'
};

let f = false



function colorCorazon() {
  if(f == false) {
    corazonClick.style.filter = 'invert(100)'
    f = true;
  } else {
    corazonClick.style.filter = 'contrast(50%)'
    f = false;
  }
};

function removeColor() {
  corazonClick.style.filter = ' contrast(50%)'
};

function changeColor(){
  button.textContent = 'Pause'
};

const pauseButton = document.getElementById('pause')
pauseButton.style.cursor = 'pointer'
// pause.addEventListener('click', pauseMusic)

//


// pauseMusic()


function reproducir1(id){
  // debugger

  const audioN = document.getElementById(`newsong${id}`)
  const icono = document.getElementById(`newIcon${id}`)
  // newIconplay12.src = 'images/image-proyect/play.svg'
  document.querySelectorAll('.icono-play-music').forEach((el) => {
    el.src = 'images/image-proyect/play.svg'
    el.style.filter = 'contrast(20%)'
  })
  if((audioN.paused == false) && (audioN.ended == false)){
    icono.src = 'images/image-proyect/play.svg'
    pauseButton.src = 'images/image-proyect/play.svg'
    button.textContent= 'Reproducir'
    // icono.style.filter = 'invert()'
    // audioN.pause();
    pause()
  } else {
    icono.src = 'images/image-proyect/pause.svg'
    pauseButton.src = 'images/image-proyect/pause.svg'
    button.textContent= 'Pause'
    PerformanceResourceTiming.src = 'images/image-proyect/pause.svg'
    pauseButton.style.filter = 'invert()'
    audioN.play();
  }

}

// let name2 = null;

// function name1(null){
//   if(name2 == null){
//     console.log( 'rivaldo')
//   } else {
//     console.log('fabio')
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
songName13.textContent = song13.name;
songName14.textContent = song14.name;

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
songArtist13.textContent = song13.artist;
songArtist14.textContent = song14.artist;


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
songAlbum13.textContent = song13.album;
songAlbum14.textContent = song14.album;


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
const icon13 = document.getElementById('icon13')
const icon14 = document.getElementById('icon14')

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
icon13.addEventListener ('clik' , remplazarSong13)
icon14.addEventListener ('clik' , remplazarSong14)


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

