const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {   //event atribute/object
        const x = e.clientX
        const y = e.clientY


        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonLeft

        //Check
        console.log('Position relative with the entire page(x & y): ' + x, y +  '\nPosition of the button itself: ' + buttonLeft, buttonTop + '\nClick position in the button: ' + xInside, yInside + '\n####################################')

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 700)
    })
})