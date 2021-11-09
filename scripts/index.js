
import random from 'random'
import sharp from 'sharp'
import { command } from 'yargs'
import * as fs from 'fs'
const eyes = ['eye.png', 'eye2.png', 'glass.png', 'glass2.png']
const bases = ['brownBase.png', 'pinkBase.png', 'yellowBase.png']
const getRandomAttr = async() => {
    let eyeRandom = random.int(0, (eyes.length - 1))
    let baseRandom = random.int(0, (bases.length - 1))
    return { eye: eyes[eyeRandom], base: bases[baseRandom] }
}

const removeExtension = (string) => string.replace(/\.[^/.]+$/, "")
const generateImage = async() => {
    try {
        const { eye, base } = await getRandomAttr()
        const result = sharp(`images/base/${base}`).composite([{ input: `images/eyes/${eye}`, blend: 'overlay' }])
        const image = await result.toBuffer()
        fs.writeFileSync(`${new Date().getMilliseconds()}-${removeExtension(base)}-${removeExtension(eye)}.png`, image )
    } catch (error) {
        console.log(`Something went wrong ${error}`)
    }
}

export default command(
	'generate-pig',
	'Generate an image of axie pig',
	(yargs) => yargs,
	generateImage,
)

