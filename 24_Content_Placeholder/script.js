const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1300)

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random/720x720&auto=format&fit=crop&w=2100&q=80" alt="" />'
  title.innerHTML = "A message 4 you"
  excerpt.innerHTML =
    "Don't play with your time, life is too short"
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />'
  name.innerHTML = 'Jacqueline Doe'
  date.innerHTML = 'Oct 07, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}