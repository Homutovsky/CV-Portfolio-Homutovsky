const buttonLeft = document.querySelector('.photo__switcher-left')
const buttonRight = document.querySelector('.photo__switcher-right')
const wrapper = document.querySelector('.person__img')
const img = document.querySelector('.person__photo')

img.addEventListener('mouseover', () => {
  buttonLeft.className = 'switcher__after-hover'
  buttonRight.className = 'switcher__after-hover'

})
img.addEventListener('mouseout', () => {
  buttonLeft.className = 'photo__switcher-left'
  buttonRight.className = 'photo__switcher-right'
})

let count = 0
const photoArray = [
  "img/person-photo.jpg",
  "img/person-photo2.jpg",
  "img/person-photo3.jpg",
  "img/person-photo4.jpg",
  "img/person-photo5.jpg",
  "img/person-photo6.jpg"]

buttonRight.addEventListener('click', () => {
  if (count < 5) {
    count++
    if (count === 1) {
      buttonLeft.style = 'backgroundImage: url(img/arrow-left.svg); border:solid 1px #fff; cursor:pointer'

    } else if (count === 5) {
      buttonRight.style = "background:none; border:none; cursor:none"
    }

    img.src = photoArray[count]

  }

})


buttonLeft.addEventListener('click', () => {
  if (count > 0) {
    if (count === 1) {
      buttonLeft.style = "background:none; border:none; cursor:none"
    }
    count--
    buttonRight.style = 'backgroundImage: url(img/arrow-right.svg); border:solid 1px #fff; cursor:pointer'
    img.src = photoArray[count]
  }
})