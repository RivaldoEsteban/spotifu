import {
  timeline,
} from './constans.js'

// import {
//   audioList
// } from './album.js'


class Player {
  play(id) {
    this.audio = document.querySelector(`#audio${id}`)
    timeline.value = this.audio.currentTime
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate)
    timeline.addEventListener('input', this.handleTimelineChange)
  }
  stop = () => {
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    timeline.value = 0
  }
  handleTimeUpdate() {
    timeline.value = this.currentTime
  }
  handleTimelineChange = () => {
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.currentTime = timeline.value
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate)

  }
}

const player = new Player

export default player