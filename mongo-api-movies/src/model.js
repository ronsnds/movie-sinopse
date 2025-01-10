import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_PORT)

export const Movie = mongoose.model('Movie', { 
    title: String, 
    sinopse: String, 
    thema: String, 
    image: String 
})