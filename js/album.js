import music from './music.js'
import {
  timeline,
} from './constans.js'

import player from './player.js'

music.list.forEach((musicItem) => {
  const template = albumSongTemplate(musicItem)
  renderAlbumSong(template)
})
const audioList = document.querySelectorAll('audio')


function renderAlbumSong(template) {
  const container = document.querySelector('#album-songList')
  container.append(template)
}

function albumSongTemplate(song) {
  const template =  `
    <div class="album-title content albumSong-title" id="${song.id}">
      <div class="icon-content">
        <img src="images/image-proyect/play.svg" alt="" class="icon" width="20px" id="icon${song.id}">
        <p id="song${song.id}">${song.name}</p>
      </div>
      <p id="artista${song.id}">${song.artist}</p>
      <p id="album${song.id}">${song.album}</p>
      <img src="images/image-proyect/cora2.svg" alt="" width="22px" id="corazon${song.id}" class="corazon">
      <audio src="./music/${song.id}.mp3" id="audio${song.id}"></audio>
    </div>
  `
  const container = document.createElement('div')
  container.innerHTML = template
  return container

}

const albumSongList = document.querySelectorAll('.album-title')
albumSongList.forEach((albumSong) => {
  albumSong.addEventListener('click', function () { replace(this.id.replace('icon', '')) })
})

const imageSong = document.getElementById('footer-image')
const nameSong = document.getElementById('name-song')
const artista = document.getElementById('cantante')
const albumCTA = document.getElementById('button-pause')

albumCTA.addEventListener('click', toggleAlbumPlaying)

const pauseButton = document.getElementById('pause')
console.log(pauseButton)

pauseButton.addEventListener('click', toggleAlbumPlaying)


function pause() {
  const audio = document.querySelector('audio[is-playing=true]')
  if(audio) {
    const id = audio.id.replace('audio', '') //numero id para
    const parent = document.getElementById(id)
    parent.querySelector('.icon').src = 'images/image-proyect/play.svg'
    audio.removeAttribute('is-playing')
    audio.pause()
    albumCTA.textContent = 'Reproducir'
    player.stop()
  }
}



function replace(id) {
  const song = music.list.find((song) => {
    if (song.id === id) {
      return true
    }
    return false
  })
  imageSong.src = song.cover;
  nameSong.textContent = song.name
  artista.textContent = song.artist
  toggleAlbumButtonMessage()
  togglePlay(id)
}

function toggleAlbumButtonMessage() {
  const audio = document.querySelector('audio[is-playing=true]')
  if (audio) {
    return albumCTA.textContent = 'Reproducir'
  }
  albumCTA.textContent = 'Pausar'
}

function toggleAlbumPlaying() {
  const audio = document.querySelector('audio[is-playing=true]')
  if (audio) {
    albumCTA.textContent = 'Reproducir'
    pauseButton.src = '../images/image-proyect/play.svg'
    return pause()
  }
  replace('01')
  albumCTA.textContent = 'Pausar'
  console.log('btn')
};




function togglePlay(id){
  const song = document.getElementById(`audio${id}`)
  const iconPlay = document.getElementById(`icon${id}`)
  pause()
  iconPlay.src = 'images/image-proyect/pause.svg'
  pauseButton.src = 'images/image-proyect/pause.svg'
  albumCTA.textContent = 'Pause'
  pauseButton.style.filter = 'invert()'
  song.setAttribute('is-playing', true)
  timeline.max = song.duration
  song.play();
  player.play(id)
}

export {
  audioList
}