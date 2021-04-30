const puppeteer = require('puppeteer')

var pageExample = "http://www.example.com/"

describe('My First Puppeteer Test', ()=> {

it('should launch the browser', async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 10, devtools: false })
    const page = await browser.newPage()
    await page.goto(pageExample)
    await page.waitForTimeout(3000)
    // await page.waitForSelector('header')
    await page.waitForSelector('h1')
    await page.waitForSelector('h1')

    await browser.close();
})
})