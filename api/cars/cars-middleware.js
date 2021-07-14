const Cars = require('./cars-model')
const vinValidator = require('vin-validator')

async function checkCarId(req, res, next) {
  try{ 
    const car = await Cars.getById(req.params.id)
    if (!car) {
    res.status(404).json({
      message: `car with id ${req.params.id} is not found`
    })  
    } else {
      req.car = car
      next()
    }
  }
  catch {
    res.status(500).json({
      message: 'problem finding car'
    })
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body
    if (vin === undefined || vin === null 
      || make === undefined || make === null
      || model === undefined || model === null
      || mileage === undefined || mileage === null) {
        res.status(400).json({
            message: `required field is missing`
        })
    } else {
        next()
    }
}

const checkVinNumberValid = (req, res, next) => {
    const vin = req.body.vin
    const vinValid = vinValidator.validate(vin)
    if(!vinValid) {
      res.status(400).json({
        message:`vin ${vin} is invalid`
      })
    } else {
      next()
    }
  }

const checkVinNumberUnique = (req, res, next) => {
  console.log('check')
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
