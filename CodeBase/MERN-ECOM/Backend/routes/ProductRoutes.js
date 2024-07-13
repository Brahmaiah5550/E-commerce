import express from 'express'
import { Product } from '../models/ProductModel.js'

var router = express.Router()

//api for all products

router.get('/products', async(req, res) => {

    var products = await Product.find({})
     return res.json(products)
    })
    
    //api for single product
    router.get('/products/:id', async(req, res) => {
      console.log(req.params)
      var { id } = req.params
     var product = await Product.findById(id)
     return res.json(product)
    })

    export default router