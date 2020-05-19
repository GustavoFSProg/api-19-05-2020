import Router from 'express'

const router = new Router()

const versionList = [
  router.get('/', function (req, res) {
    res.status(200).send({
      version: 'API Version 2.0.0',
    })
  }),
]

export default versionList
