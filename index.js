const button = document.querySelector('.photo__switcher-right')
const wrapper = document.querySelector('.person__img')
const img = document.querySelector('.person__photo')

img.addEventListener('mouseover', () => {
  button.style = "display:none"
})
img.addEventListener('mouseout', () => {
  button.style = "display:block"
})
button.addEventListener('click', () => {

  if (img.src = "img/person-photo.jpg") {
    img.remove();
    const newImg = document.createElement('img')
    newImg.src = "img/person-photo2.jpg"
    wrapper.append(newImg)
    if (newImg.src = "img/person-photo2.jpg") {
    }


  }
})