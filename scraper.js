const puppeteer=require("puppeteer")

async function buscar(segmento,cidade){

const browser=await puppeteer.launch()

const page=await browser.newPage()

await page.goto("https://www.google.com/search?q="+segmento+" "+cidade)

await page.waitForTimeout(5000)

let dados=await page.evaluate(()=>{

let empresas=[]

document.querySelectorAll("h3").forEach(el=>{

let nome=el.innerText

if(nome.length<80){

empresas.push({

nome:nome,
email:"",
telefone:"",
site:""

})

}

})

return empresas

})

await browser.close()

return dados

}

module.exports={buscar}
