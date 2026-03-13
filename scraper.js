const puppeteer = require("puppeteer");

async function buscar(segmento, cidade){

const browser = await puppeteer.launch({
headless:false
});

const page = await browser.newPage();

const busca = `${segmento} ${cidade}`;

await page.goto(`https://www.google.com/search?q=${encodeURIComponent(busca)}`, {
waitUntil:"domcontentloaded"
});

await page.waitForTimeout(4000);

const dados = await page.evaluate(()=>{

let empresas = [];

document.querySelectorAll("h3").forEach(el=>{

let nome = el.innerText;

if(nome.length > 3 && nome.length < 80){

empresas.push({
nome: nome,
email: "",
telefone: "",
site: ""
});

}

});

return empresas.slice(0,20);

});

await browser.close();

return dados;

}

module.exports = { buscar };
