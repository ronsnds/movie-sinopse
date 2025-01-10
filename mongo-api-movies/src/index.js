import express from 'express'
import cors from 'cors'
import { Movie } from './model.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
    const files = await Movie.find()
    res.send(files)
})

app.post("/upload", (req, res) => {
    const MovieSave = new Movie({
        title: req.body.title,
        sinopse: req.body.sinopse,
        thema: req.body.thema,
        image: req.body.image
    })

    MovieSave.save().then(() => console.log('Salvo com sucesso!'))
    res.send("Salvo com sucesso!")
})

app.listen(3000, () => {
    console.log("Porta rodando!")
})