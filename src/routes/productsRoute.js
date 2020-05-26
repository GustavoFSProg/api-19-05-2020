import { Router } from 'express'
import productController from '../controllers/productController'

const routes = new Router()

const prefix = '/products'

const productRouteList = [
  routes.post(prefix, productController.create),
  routes.get(prefix, productController.get),
]

export default productRouteList
