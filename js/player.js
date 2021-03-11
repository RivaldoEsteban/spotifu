import {
  timeline,
} from './constans.js'


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
    const timeStart = document.getElementById('time-start')
    timeStart.textContent = (this.currentTime / 60 ).toFixed(2)
    const timeEnd = document.getElementById('time-end')
    timeEnd.textContent = (this.duration.toFixed(0)/60).toFixed(2)
  }

  handleTimelineChange = () => {
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.currentTime = timeline.value
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate)

  }
}

const player = new Player
//


export default player