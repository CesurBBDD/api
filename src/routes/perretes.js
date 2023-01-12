var router = require('express').Router()
const perretes = new Map();

perretes.set("1", "Samba");
perretes.set("2", "Sugus");


router.get('/:id', function(req, res) {
var nombre = perretes.get(req.params.id);

if (nombre==null)
{ res.json({ message: "No existe el perrete con id " + req.params.id });
}
  else {res.json({ name: nombre })
}})

router.get('/', function(req, res) {
    array = Array.from(perretes, ([id, name]) => ({ id, name }));
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