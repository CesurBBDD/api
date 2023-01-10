var router = require('express').Router()
  var perretes = require('./perretes')

  router.use('/perretes', perretes)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router