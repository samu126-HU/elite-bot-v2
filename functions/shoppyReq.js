
const puppeteer = require('puppeteer')

async function shoppyStock(productURL) {
    const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']}); 
    const page = await browser.newPage();                                                        
    await page.goto(productURL, {waitUntil: 'networkidle0'});                                    
    let data = await page.evaluate(() => {                                                       
        let stock = document.querySelector('span[class="text-muted"]').innerText;        
        return {stock}                                                                
    })                                                                 
    await browser.close()                                                                       
    return data.stock                                                                     
}

module.exports = shoppyStock