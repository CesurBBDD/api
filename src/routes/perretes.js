var router = require('express').Router()
const perretes = new Map();

perretes.set("1", "Samba");
perretes.set("2", "Sugus");


router.get('/:id', function(req, res) {

  res.json({ message: perretes.get(req.params.id) })
})

router.get('/', function(req, res) {
    array = Array.from(perretes, ([name, value]) => ({ name, value }));
    console.log(array);
    res.json(array)
})

router.post('/', function(req, res) {
  res.json({ message: 'Vas a añadir un perrete' })
})

router.put('/:id', function(req, res) {
  res.json({ message: 'Vas a actualizar el perrete con id ' + req.params.id })
})

router.delete('/:id', function(req, res) {
  res.json({ message: 'Vas a borrar el perrete con id ' + req.params.id})
})


module.exports = router