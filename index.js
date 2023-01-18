const buttonLeft = document.querySelector('.photo__switcher-left')
const buttonRight = document.querySelector('.photo__switcher-right')
const wrapper = document.querySelector('.person__img')
const img = document.querySelector('.person__photo')

img.addEventListener('mouseover', () => {
  buttonLeft.style = "display:none"
  buttonRight.style = "display:none"
})
img.addEventListener('mouseout', () => {
  buttonLeft.style = "display:block"
  buttonRight.style = "display:block"
})
buttonRight.addEventListener('click', () => {
if(img.src == 'http://127.0.0.1:5501/img/person-photo.jpg') {
  buttonLeft.style = 'backgroundImage: url(img/arrow-right.svg); border:solid 1px #fff; cursor:pointer'
  img.src = 'http://127.0.0.1:5501/img/person-photo2.jpg'
} else if(img.src == 'http://127.0.0.1:5501/img/person-photo2.jpg') {
  img.src = 'http://127.0.0.1:5501/img/person-photo3.jpg'
} else if(img.src == 'http://127.0.0.1:5501/img/person-photo3.jpg') {
  img.src = 'http://127.0.0.1:5501/img/person-photo4.jpg'
} else if(img.src == 'http://127.0.0.1:5501/img/person-photo4.jpg') {
  img.src = 'http://127.0.0.1:5501/img/person-photo5.jpg'
} else if(img.src == 'http://127.0.0.1:5501/img/person-photo5.jpg') {
  img.src = 'http://127.0.0.1:5501/img/person-photo6.jpg'
  buttonRight.style = "background:none; border:none; cursor:none"
} 
})


buttonLeft.addEventListener('click', () => {
  if(img.src == 'http://127.0.0.1:5501/img/person-photo6.jpg') {
    img.src = 'http://127.0.0.1:5501/img/person-photo5.jpg'
    buttonRight.style = 'backgroundImage: url(img/arrow-left.svg); border:solid 1px #fff; cursor:pointer'
  } else if(img.src == 'http://127.0.0.1:5501/img/person-photo5.jpg') {
    img.src = 'http://127.0.0.1:5501/img/person-photo4.jpg'
  } else if(img.src == 'http://127.0.0.1:5501/img/person-photo4.jpg') {
    img.src = 'http://127.0.0.1:5501/img/person-photo3.jpg'
  } else if(img.src == 'http://127.0.0.1:5501/img/person-photo3.jpg') {
    img.src = 'http://127.0.0.1:5501/img/person-photo2.jpg'
  } else if(img.src == 'http://127.0.0.1:5501/img/person-photo2.jpg') {
    img.src = 'http://127.0.0.1:5501/img/person-photo.jpg'
    buttonLeft.style = "background:none; border:none; cursor:none"
  } 
  })


