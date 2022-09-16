const video = document.querySelector('#camera')
const captureImgBtn = document.querySelector('#capture-img')
const imageTag = document.querySelector('#image')

// video.setAttribute('autoplay', '')

captureImgBtn.addEventListener('click', () => {
  const canvas = document.createElement('canvas')
  // scale the canvas accordingly
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  // draw the video at that frame
  canvas.getContext('2d')
    .drawImage(video, 0, 0, canvas.width, canvas.height)
  const dataUrl = canvas.toDataURL()
  imageTag.src = dataUrl
})

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
  // console.log(stream)
  video.srcObject = stream

})
