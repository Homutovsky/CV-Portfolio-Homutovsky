const buttonLeft = document.querySelector('.photo__switcher-hidden')
const buttonRight = document.querySelector('.photo__switcher-right')
const wrapper = document.querySelector('.person__img')
const img = document.querySelector('.person__photo')


let count = 0
const photoArray = [
  "img/person-photo.jpg",
  "img/person-photo1.jpg",
  "img/person-photo2.jpg",
]

buttonRight.addEventListener('click', () => {
  if (count < 2) {
    count++

    if (count === 1) {
      buttonLeft.className = 'photo__switcher-left'

    } else if (count === 2) {
      buttonRight.className = "photo__switcher-hidden"
    }

    img.src = photoArray[count]

  }

})

buttonLeft.addEventListener('click', () => {
  if (count > 0) {
    if (count === 1) {
      buttonLeft.className = "photo__switcher-hidden"
    }
    count--

    buttonRight.className = 'photo__switcher-right'
    img.src = photoArray[count]
  }
})


img.addEventListener('mouseover', () => {
  buttonLeft.className = 'photo__switcher-hover'
  buttonRight.className = 'photo__switcher-hover'
})
img.addEventListener('mouseout', () => {
  if (count === 0) {
    buttonLeft.className = 'photo__switcher-hidden'
    buttonRight.className = 'photo__switcher-right'
  } else if (count === 2) {
    buttonLeft.className = 'photo__switcher-left'
    buttonRight.className = 'photo__switcher-hidden'
  } else {
    buttonLeft.className = 'photo__switcher-left'
    buttonRight.className = 'photo__switcher-right'

  }
})