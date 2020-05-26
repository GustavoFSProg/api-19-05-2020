import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productModel from '../models/productModel'

dotenv.config()
const CONNECTION_STRING =
  'mongodb://uzc0q7fwzixbgj0dseno:2KfUZulRoL0OpJsQtaBJ@banoymimnojyvs8-mongodb.services.clever-cloud.com:27017/banoymimnojyvs8'

mongoose.connect(CONNECTION_STRING)

async function create(req, res) {
  try {
    await productModel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      slug: req.body.slug,
    })

    return res.status(201).send({ messagem: 'Produto Criado com sucesso!' })
  } catch (error) {
    return res.status(400).send({ messagem: 'ERRO ao criar o produto!' })
  }
}

async function get(req, res) {
  try {
    const data = await productModel.find({}, 'title description price')

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send('ERRO do GET')
  }
}

export default { create, get }
