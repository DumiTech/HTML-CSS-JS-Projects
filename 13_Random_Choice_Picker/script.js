const tagsElement = document.getElementById('tags')
const textElement = document.getElementById('textarea')

// textElement.focus()

textElement.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsElement.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        hightlightTag(randomTag)

        setTimeout(() => {
            unHightlightTag(randomTag)
        }, 100)
    }, 100);


    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            hightlightTag(randomTag)
        }, 100)
    }, times * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function hightlightTag(tag) {
    tag.classList.add('highlight')
}

function unHightlightTag(tag) {
    tag.classList.remove('highlight')
}

