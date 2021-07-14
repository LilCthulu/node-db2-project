const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
    .where({ id: Number(id) })
    .first()
}

const create = (car) => {
  console.log(car)
  return db('cars')
    .insert(car)
    .then(([id]) => getById(id))
}

module.exports = {
  getAll,
  getById,
  create,
}
