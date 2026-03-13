const express=require("express")
const scraper=require("./scraper")

const app=express()

app.use(express.json())
app.use(express.static(__dirname))

app.post("/buscar",async(req,res)=>{

let {segmento,cidade}=req.body

let dados=await scraper.buscar(segmento,cidade)

res.json(dados)

})

app.listen(3000,()=>{

console.log("Servidor rodando em http://localhost:3000")

})
