const express = require('express')
const Cars = require('./cars-model')
const {checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require('./cars-middleware')

const router = express.Router()


router.get('/', (req, res, next) => {
    Cars.getAll()
    .then((cars) => res.json([cars]))
    .catch(next())
})

module.exports = router
