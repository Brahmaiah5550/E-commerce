
import express from 'express'
import PORT from './config.js'
import { dbURL } from './config.js'
import mongoose from 'mongoose'
// import { products } from './products.js'
import cors from 'cors'
// import { Product } from './models/ProductModel.js'

import ProductRoutes from './routes/ProductRoutes.js'
import UserRoutes from './routes/UserRoutes.js'
import ProfileRoutes from './routes/ProfileRoutes.js'

var app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello server')
})

app.use('/', ProductRoutes)
app.use('/', UserRoutes)
app.use('/',ProfileRoutes)

app.listen(PORT, () => {
  console.log( `SERVER STARTED IN PORT ${PORT}`)
})

mongoose.connect(dbURL)
  .then(() => {
  console.log('DB CONNECTED')
  }).catch((error) => {
  console.log(error)
})