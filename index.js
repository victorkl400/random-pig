const eyes = ['eye.png', 'eye2.png', 'glass.png', 'glass2.png']
const bases = ['brownBase.png', 'pinkBase.png', 'yellowBase.png']
const random = require('random')
const fs = require('fs')
const sharp = require('sharp')

async function getRandomAttr() {
    let eyeRandom = random.int(0, (eyes.length - 1))
    let baseRandom = random.int(0, (bases.length - 1))
    return { eye: eyes[eyeRandom], base: bases[baseRandom] }
}

getRandomAttr().then(({ eye, base }) => {
    sharp(`images/base/${base}`)
    .composite(
        [{ input: `images/eyes/${eye}`, blend: 'overlay' }]).toFile(`output/${new Date().getMilliseconds()}-${base}-${eye}.png`)
})
