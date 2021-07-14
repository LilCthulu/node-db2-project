const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
  .then(([cars]) => [cars])
  .catch((err) => console.log(err))
}

const getById = (id) => {
  return db('cars')
    .where({ id: Number(id) })
    .first()
}

const create = (car) => {
  return db('cars')
    .insert(car)
    .then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  create,
}
